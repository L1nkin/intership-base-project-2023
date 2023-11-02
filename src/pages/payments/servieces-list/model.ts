/* eslint-disable no-unused-vars */
import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useMemo, useEffect, useCallback, useState } from "react"
import { PaymentsFlatListItem } from "@features/payments-list/types"
import { PaymentsStackParamList } from "@processes/routing/types"

import { configFlatListItems } from "./lib"

type UseSearchingParams = {
    services: PaymentServiceUI[]

    navigateTo(screenName: keyof PaymentsStackParamList, service: PaymentServiceUI): void
}

export const useSearching = ({ services, navigateTo }: UseSearchingParams) => {
    const [query, setQuery] = useState('')
    const [searchedServices, setSearchedServices] = useState<PaymentsFlatListItem[]>([])

    const servicesModel = useMemo(() => {
        return configFlatListItems(services)
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
        navigateTo('Payment', selectedService!)
    }, [navigateTo, services])

    const onChange = useCallback((text: string) => {
        setQuery(text)
    }, [])

    return { searchedServices, query, onChange, onPress }
}