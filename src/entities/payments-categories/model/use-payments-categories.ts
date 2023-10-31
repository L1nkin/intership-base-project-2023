import { PaymentCategoryUI, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { getPaymentCategories } from "@shared/api/payment-categories"
import { useCallback, useEffect, useState } from "react"

export const usePaymentsCategories = () => {
    const [paymentCategories, setPaymentCategories] = useState<PaymentCategoryUI[]>([])
    const [isLoading, setLoading] = useState(false)

    const fetchPaymentCategories = useCallback(async () => {
        setLoading(true)

        const response = await getPaymentCategories()

        if (!response) {
            return
        }

        setPaymentCategories(mapPaymentCategoriesToUI(response).categories!)
        setLoading(false)
    }, [setPaymentCategories])

    useEffect(() => {
        fetchPaymentCategories()
    }, [fetchPaymentCategories])

    return { paymentCategories, isLoading }
}