import React, { useCallback } from 'react'
import { PaymentOperation } from '@pages/payments/payment-operation'

import { PaymentScreenStackProps } from '../../types'

export const PaymentScreen: React.FC<PaymentScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback((success: boolean, sum: number) => {
        navigation.navigate('SuccessOfOperation', { success, sum })
    }, [navigation])

    return (
        <PaymentOperation service={route.params.service} navigateTo={navigateTo} />
    )
}
