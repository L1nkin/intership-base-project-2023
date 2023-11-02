/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@ui/theme'
import { PaymentsFlatList } from '@features/categories-list'
import { PaymentsStackParamList } from '@processes/routing/types'
import { SearchBar } from '@shared/ui/molecules'
import { PaymentServiceUI } from '@shared/api/payment-categories'

import { useSearching } from './model'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
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

export const ServicesListContainer = ({ services, navigateTo }: Props) => {
    const { searchedServices, query, onChange, onPress } = useSearching({ services, navigateTo })

    return (
        <Wrapper>
            <SearchBarView>
                <SearchBarWrapper value={query} onChangeText={onChange} placeholder='Поиск' />
            </SearchBarView>
            <ServicesListWrapper isLoading={false} items={searchedServices} onPress={onPress} />
        </Wrapper>
    )
}
