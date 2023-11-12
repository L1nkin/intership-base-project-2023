import React, { useCallback } from 'react'
import { styled } from '@ui/theme'
import { PaymentsFlatList } from '@features/payments-list'
import { usePaymentsCategories } from '@entities/payments-categories'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 18px;
`

const CategoriesFlatListWrapper = styled(PaymentsFlatList)`
    padding-top: 20px;
`

type Props = {
    submit: (title: string, id: string) => void
}

export const PaymentsListContainer = ({ submit }: Props) => {
    const { paymentCategories, isLoading } = usePaymentsCategories()
    const onPress = useCallback((id: string) => {
        const selectedCategories = paymentCategories.find((category) => { return category.id === id })
        if (selectedCategories) {
            submit(selectedCategories.name, selectedCategories.id)
        }
    }, [submit, paymentCategories])

    return (
        <Wrapper>
            <CategoriesFlatListWrapper isLoading={isLoading} items={[...paymentCategories]} onPress={onPress} />
        </Wrapper>
    )
}
