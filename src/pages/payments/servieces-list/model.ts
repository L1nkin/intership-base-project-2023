import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useMemo, useEffect, useCallback, useState } from "react"
import { $servicesStore, getServices, searchServices } from "@entities/payments-categories/model/store"
import { useStore } from "effector-react"

type UseSearchingParams = {
    id: string
    submit(service: PaymentServiceUI): void
}

export const useSearching = ({ id, submit }: UseSearchingParams) => {
    const [query, setQuery] = useState('')
    const services = useStore($servicesStore)

    const servicesModel = useMemo(() => {
        return [...services!]
    }, [services])

    useEffect(() => {
        getServices(id)
        searchServices(query)
    }, [id, query])

    const onPress = useCallback((id: string) => {
        const selectedService = services?.find((service) => service.id === id)
        submit(selectedService!)
    }, [submit, services])

    const onChange = useCallback((text: string) => {
        setQuery(text)
    }, [])

    return { servicesModel, query, onChange, onPress }
}