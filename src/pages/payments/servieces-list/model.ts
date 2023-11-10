import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useMemo, useEffect, useCallback, useState } from "react"
import { $categoriesStore, $servicesStore, searchServices, setupServices } from "@entities/payments-categories"
import { useStore } from "effector-react"

type UseSearchingParams = {
    id: string
    submit(service: PaymentServiceUI): void
}

export const useSearching = ({ id, submit }: UseSearchingParams) => {
    const [query, setQuery] = useState('')
    const categories = useStore($categoriesStore)
    const services = useStore($servicesStore)

    const servicesModel = useMemo(() => {
        return [...services]
    }, [services])

    useEffect(() => {
        setupServices(categories.find((category) => category.id === id)?.services ?? [])
        searchServices(query)
    }, [categories, id, query])

    const onPress = useCallback((id: string) => {
        const selectedService = services?.find((service) => service.id === id)
        submit(selectedService!)
    }, [submit, services])

    const onChange = useCallback((text: string) => {
        setQuery(text)
    }, [])

    return { servicesModel, query, onChange, onPress }
}