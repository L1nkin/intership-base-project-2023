import React from 'react'
import { PaymentOperation } from '@pages/payments/payment-operation'

import { PaymentScreenStackProps } from '../../types'

export const PaymentScreen: React.FC<PaymentScreenStackProps> = ({ navigation, route }) => {
    return (
        <PaymentOperation service={route.params.service} goBack={() => navigation.goBack()} />
    )
}
