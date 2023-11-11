import { createSnack } from "@entities/snack-bar"
import { PaymentCategoryUI, getPaymentCategories, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { createStore, createEffect, createEvent } from "effector"

const MS_IN_SEC = 86400000
export const $categoriesStore = createStore<PaymentCategoryUI[]>([])
export const $fetchPaymentCategoriesDate = createStore<number>(0)

export const setupPaymentCategoriesRequestDate = createEvent<number>()

export const fetchPaymentCategoriesFx = createEffect(async () => {
    if (Date.now() - $fetchPaymentCategoriesDate.getState() >= MS_IN_SEC) {
        try {
            const response = await getPaymentCategories()
            if (response) {
                setupPaymentCategoriesRequestDate(Date.now())
                return mapPaymentCategoriesToUI(response).categories
            }
        } catch (error) {
            createSnack({ message: 'Что-то пошло не так', duration: 3000 })
            return
        }

    }
})

$categoriesStore.on(fetchPaymentCategoriesFx.doneData, (state, payload) => payload)
$fetchPaymentCategoriesDate.on(setupPaymentCategoriesRequestDate, (state, date) => date)
