/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@ui/theme'
import { CategoriesFlatList } from '@features/categories-list'
import { PaymentsStackParamList } from '@app/app-navigation/Screens/types'
import { Service, SimpleModel } from '@shared/api/types'
import { SearchBar } from '@shared/ui/molecules'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  padding: 16px;
`

type Props = {
    services: Service[]

    navigateTo(screenName: keyof PaymentsStackParamList, service: Service): void
}

const SearchBarWrapper = styled(SearchBar)`
    margin: 10px 18px;
`

const SearchBarView = styled.View`
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const ServicesListWrapper = styled(CategoriesFlatList)`
    padding-top: 16px;
`

export const MobileNetworkContainer = ({ services, navigateTo }: Props) => {
    const [query, setQuery] = useState('')
    const [searchedServices, setSearchedServices] = useState<SimpleModel[]>([])

    const servicesModel = useMemo(() => {
        return services.map(({ service_id, service_name, service_icon }) => {
            const simpleModel: SimpleModel = {
                id: service_id,
                name: service_name,
                icon: service_icon
            }
            return simpleModel
        }
        )
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
        const selectedService = services.find((service) => service.service_id === id)
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
            <ServicesListWrapper items={searchedServices} onPress={onPress} />
        </Wrapper>
    )
}
