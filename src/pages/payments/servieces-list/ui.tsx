/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@ui/theme'
import { PaymentsFlatList } from '@features/categories-list'
import { PaymentsStackParamList } from '@processes/routing/types'
import { SearchBar } from '@shared/ui/molecules'
import { PaymentServiceUI } from '@shared/api/payment-categories'
import { PaymentsFlatListItem } from '@features/categories-list/types'

import { configFlatListItems } from './lib'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  padding: 16px;
`

type Props = {
    services: PaymentServiceUI[]

    navigateTo(screenName: keyof PaymentsStackParamList, service: PaymentServiceUI): void
}

const SearchBarWrapper = styled(SearchBar)`
    margin: 10px 18px;
`

const SearchBarView = styled.View`
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const ServicesListWrapper = styled(PaymentsFlatList)`
    padding-top: 16px;
`

export const MobileNetworkContainer = ({ services, navigateTo }: Props) => {
    const [query, setQuery] = useState('')
    const [searchedServices, setSearchedServices] = useState<PaymentsFlatListItem[]>([])

    const servicesModel = useMemo(() => {
        return configFlatListItems(services)
    }, [services])

    useEffect(() => {
        if (query === '') {
            setSearchedServices(servicesModel)
        } else {
            setSearchedServices(servicesModel.filter((service) => {
                return service.name.toLowerCase().includes(query.toLowerCase())
            }))
        }
    }, [query, servicesModel])

    const onPress = useCallback((id: string) => {
        const selectedService = services.find((service) => service.id === id)
        navigateTo('Payment', selectedService!)
    }, [navigateTo, services])

    const onChange = useCallback((query: string) => {
        setQuery(query)
    }, [])

    return (
        <Wrapper>
            <SearchBarView>
                <SearchBarWrapper onChange={(e) => onChange(e.nativeEvent.text)} placeholder='search' />
            </SearchBarView>
            <ServicesListWrapper isLoading={false} items={searchedServices} onPress={onPress} />
        </Wrapper>
    )
}
