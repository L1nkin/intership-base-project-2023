import { PaymentServiceUI, getPaymentList, mapPaymentCategoriesToUI } from "@shared/api/payments"
import { useMemo, useEffect, useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { createSnack } from "@entities/snack-bar"

type UseSearchingParams = {
    id: string
    submit(service: PaymentServiceUI): void
}

export const useSearching = ({ id, submit }: UseSearchingParams) => {
    const [query, setQuery] = useState('')
    const { data, isLoading, isPending, isError } = useQuery({ queryKey: ['category'], queryFn: getPaymentList })
    const [services, setServices] = useState<PaymentServiceUI[]>([])


    const servicesModel = useMemo(() => {
        const searchedServices = services.filter(service => service.name.toLowerCase().includes(query.toLowerCase().trim()))
        return [...searchedServices]
    }, [query, services])

    useEffect(() => {
        if (data) {
            const currentServices = mapPaymentCategoriesToUI(data).categories.find(category => category.id === id)?.services ?? []
            setServices(currentServices)
        }
        if (isError) {
            createSnack({ message: "Что-то пошло не так", duration: 3000 })
        }
    }, [data, id, isError, query])

    const onPress = useCallback((id: string) => {
        const selectedService = services?.find((service) => service.id === id)
        submit(selectedService!)
    }, [submit, services])

    const onChange = useCallback((text: string) => {
        setQuery(text)
    }, [])

    return { servicesModel, isLoading, isPending, query, onChange, onPress }
}