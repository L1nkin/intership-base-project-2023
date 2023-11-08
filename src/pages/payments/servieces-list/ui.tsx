import React from 'react'
import { styled } from '@ui/theme'
import { PaymentsFlatList } from '@features/payments-list'
import { SearchBar } from '@shared/ui/molecules'
import { PaymentServiceUI } from '@shared/api/payment-categories'

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
    const { servicesModel, query, onChange, onPress } = useSearching({ id, submit })

    return (
        <Wrapper>
            <SearchBarView>
                <SearchBarWrapper value={query} onChangeText={onChange} placeholder='Поиск' />
            </SearchBarView>
            <ServicesListWrapper isLoading={false} items={servicesModel} onPress={onPress} />
        </Wrapper>
    )
}
