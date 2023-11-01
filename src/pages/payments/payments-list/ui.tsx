/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { styled } from '@ui/theme'
import { PaymentsStackParamList } from '@processes/routing/types'
import { PaymentsFlatList } from '@features/categories-list'
import { PaymentServiceUI } from '@shared/api/payment-categories'
import { usePaymentsCategories } from '@entities/payments-categories'

import { configFlatListItems } from './lib'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 18px;
`

const CategoriesFlatListWrapper = styled(PaymentsFlatList)`
    top: 20px;
`

type Props = {
    navigateTo(screenName: keyof PaymentsStackParamList, title?: string, services?: PaymentServiceUI[]): void
}

export const PaymentsListContainer = ({ navigateTo }: Props) => {
    const { paymentCategories, isLoading } = usePaymentsCategories()

    const onPress = useCallback((id: string) => {
        const selectedCategories = paymentCategories.find((category) => { return category.id === id })
        navigateTo('ServicesList', selectedCategories?.name, selectedCategories?.services)
    }, [navigateTo, paymentCategories])

    return (
        <Wrapper>
            <CategoriesFlatListWrapper isLoading={isLoading} items={configFlatListItems(paymentCategories)} onPress={onPress} />
        </Wrapper>
    )
}
