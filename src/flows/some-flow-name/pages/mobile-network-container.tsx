/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { styled } from '@ui/theme'
import { ServicesFlatList } from '@features/categories-list'
import { PaymentsStackParamList } from '@app/app-navigation/Screens/types'
import { Service } from '@shared/api/types'
import { SearchBar } from '@shared/ui/molecules'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  padding: 16px;
`

type Props = {
    services: Service[]

    navigateTo(screenName: keyof PaymentsStackParamList): void
}

const SearchBarWrapper = styled(SearchBar)`
    margin: 10px 18px;
`

const SearchBarView = styled.View`
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const ServicesListWrapper = styled(ServicesFlatList)`
    padding-top: 16px;
`

export const MobileNetworkContainer = ({ services }: Props) => {
    const [query, setQuery] = useState('')
    const [searchedServices, setSearchedServices] = useState<Service[]>([])

    useEffect(() => {
        if (query === '') {
            setSearchedServices(services)
        } else {
            setSearchedServices(services.filter((service) => {
                return service.service_name.toLowerCase().includes(query.toLowerCase())
            }))
        }
    }, [query, services])

    const onPress = useCallback((id: string) => {
        console.log(id)
    }, [])

    const onChange = useCallback((query: string) => {
        setQuery(query)
    }, [])

    return (
        <Wrapper>
            <SearchBarView>
                <SearchBarWrapper onChange={(e) => onChange(e.nativeEvent.text)} placeholder='search' />
            </SearchBarView>
            <ServicesListWrapper items={searchedServices} onPress={onPress} />
        </Wrapper>
    )
}
