import { createSnack } from "@entities/snack-bar"
import { PaymentCategoryUI, PaymentServiceUI, getPaymentCategories, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { createStore, createEffect, createEvent } from "effector"

export const $categoriesStore = createStore<PaymentCategoryUI[]>([])
export const $fetchPaymentCategoriesDate = createStore<number>(0)

export const setupPaymentCategoriesRequestDate = createEvent<number>()

$fetchPaymentCategoriesDate.on(setupPaymentCategoriesRequestDate, (state, date) => date)

export const fetchPaymentCategoriesFx = createEffect(async () => {
    if (Date.now() - $fetchPaymentCategoriesDate.getState() >= 86400000) {
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

export const $servicesStore = createStore<PaymentServiceUI[]>([])

export const setupServices = createEvent<PaymentServiceUI[]>()

$servicesStore.on(setupServices, (_, services) => services)

export const searchServices = createEvent<string>()

$servicesStore.on(searchServices, (state, query) => {
    return query
        ? state = state.filter((service) =>
            service.name.toLowerCase().includes(query.toLowerCase().trim())
        )
        : state
})
