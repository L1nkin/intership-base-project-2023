import { useStore } from "effector-react"
import { useEffect } from "react"
import { $categoriesStore, fetchPaymentCategoriesFx } from "./store"

export const usePaymentsCategories = () => {
    const paymentCategories = useStore($categoriesStore)
    const isLoading = useStore(fetchPaymentCategoriesFx.pending)

    useEffect(() => {
        fetchPaymentCategoriesFx()
    }, [])

    return { paymentCategories, isLoading }
}