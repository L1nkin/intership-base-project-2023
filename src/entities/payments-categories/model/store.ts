import { createSnack } from "@entities/snack-bar"
import { PaymentCategoryUI, PaymentServiceUI, getPaymentCategories, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { createStore, createEffect, createEvent } from "effector"

const MS_IN_SEC = 86400000
export const $categoriesStore = createStore<PaymentCategoryUI[]>([])
export const $fetchPaymentCategoriesDate = createStore<number>(0)
export const $servicesStore = createStore<PaymentServiceUI[]>([])

export const setupPaymentCategoriesRequestDate = createEvent<number>()
export const setupServices = createEvent<PaymentServiceUI[]>()
export const searchServices = createEvent<string>()

export const fetchPaymentCategoriesFx = createEffect(async () => {
    if (Date.now() - $fetchPaymentCategoriesDate.getState() >= MS_IN_SEC) {
        const response = await getPaymentCategories()
        if (!response) {
            createSnack({ message: 'Что-то пошло не так', duration: 3000 })
            return
        }
        setupPaymentCategoriesRequestDate(Date.now())
        return mapPaymentCategoriesToUI(response).categories
    }
})

$categoriesStore.on(fetchPaymentCategoriesFx.doneData, (state, payload) => payload)
$fetchPaymentCategoriesDate.on(setupPaymentCategoriesRequestDate, (state, date) => date)
$servicesStore.on(setupServices, (_, services) => services)
$servicesStore.on(searchServices, (state, query) => {
    return query
        ? state = state.filter((service) =>
            service.name.toLowerCase().includes(query.toLowerCase().trim())
        )
        : state
})
