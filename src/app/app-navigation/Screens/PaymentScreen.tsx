import React from 'react'
import { PaymentContainer } from '@flows/some-flow-name/pages'

import { PaymentScreenStackProps } from './types'

export const PaymentScreen: React.FC<PaymentScreenStackProps> = ({ route }) => {
    return (
        <PaymentContainer service={route.params.service} />
    )
}
