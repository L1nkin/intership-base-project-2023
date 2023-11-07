import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useMemo, useEffect, useCallback, useState } from "react"
import { PaymentsFlatListItem } from "@features/payments-list/types"

type UseSearchingParams = {
    services: PaymentServiceUI[]

    submit(service: PaymentServiceUI): void
}

export const useSearching = ({ services, submit }: UseSearchingParams) => {
    const [query, setQuery] = useState('')
    const [searchedServices, setSearchedServices] = useState<PaymentsFlatListItem[]>([])

    const servicesModel = useMemo(() => {
        return [...services]
    }, [services])

    useEffect(() => {
        setSearchedServices(query
            ? servicesModel.filter((service) =>
                service.name.toLowerCase().includes(query.toLowerCase().trim())
            )
            : servicesModel
        )
    }, [query, servicesModel])

    const onPress = useCallback((id: string) => {
        const selectedService = services.find((service) => service.id === id)
        submit(selectedService!)
    }, [submit, services])

    const onChange = useCallback((text: string) => {
        setQuery(text)
    }, [])

    return { searchedServices, query, onChange, onPress }
}