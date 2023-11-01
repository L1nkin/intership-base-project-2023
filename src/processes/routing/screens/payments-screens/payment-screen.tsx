import React, { useCallback } from 'react'
import { PaymentOperation } from '@pages/payments/payment-operation'

import { PaymentScreenStackProps } from '../../types'

export const PaymentScreen: React.FC<PaymentScreenStackProps> = ({ navigation, route }) => {
    const goBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    return (
        <PaymentOperation service={route.params.service} goBack={goBack} />
    )
}
