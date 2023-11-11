import React, { useCallback } from 'react'
import { styled } from '@ui/theme'
import { PaymentsFlatList } from '@features/payments-list'
import { SearchBar } from '@shared/ui/molecules'
import { PaymentServiceUI } from '@shared/api/payments'

import { fetchPaymentCategoriesFx, setupPaymentCategoriesRequestDate } from '@entities/payments-categories'
import { useStore } from 'effector-react'
import { useSearching } from './model'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
`

type Props = {
    id: string
    submit: (service: PaymentServiceUI) => void
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

export const ServicesListContainer = ({ id, submit }: Props) => {
    const { servicesModel, isLoading, query, onChange, onPress } = useSearching({ id, submit })
    const refreshing = useStore<boolean>(fetchPaymentCategoriesFx.pending)


    const onRefresh = useCallback(() => {
        setupPaymentCategoriesRequestDate(0)
        fetchPaymentCategoriesFx()
    }, [])

    return (
        <Wrapper>
            <SearchBarView>
                <SearchBarWrapper value={query} onChangeText={onChange} placeholder='Поиск' />
            </SearchBarView>
            <ServicesListWrapper refreshControl={onRefresh} isLoading={isLoading} refreshing={refreshing} items={servicesModel} onPress={onPress} />
        </Wrapper>
    )
}
