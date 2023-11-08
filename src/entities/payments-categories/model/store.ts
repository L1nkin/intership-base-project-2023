import { createSnack } from "@entities/snack-bar"
import { PaymentCategoryUI, PaymentServiceUI, getPaymentCategories, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { createStore, createEffect, createEvent } from "effector"

export const $categoriesStore = createStore<PaymentCategoryUI[]>([])

export const fetchPaymentCategoriesFx = createEffect(async () => {
    const response = await getPaymentCategories()
    if (!response) {
        createSnack({ message: 'Что-то пошло не так', duration: 3000 })
        return
    }

    return mapPaymentCategoriesToUI(response).categories
})

$categoriesStore.on(fetchPaymentCategoriesFx.doneData, (state, payload) => payload)

export const $servicesStore = createStore<PaymentServiceUI[]>([])

export const getServices = createEvent<string>()

$servicesStore.on(getServices, (state, id) => $categoriesStore.getState().find((category) => category.id = id)?.services)

export const searchServices = createEvent<string>()

$servicesStore.on(searchServices, (state, query) => {
    return query
        ? state = state.filter((service) =>
            service.name.toLowerCase().includes(query.toLowerCase().trim())
        )
        : state
})
