import React from 'react'
import { Typography } from '@shared/ui/atoms'

import { PaymentScreenStackProps } from '../../types'

export const PaymentScreen: React.FC<PaymentScreenStackProps> = ({ route }) => {
    return (
        <Typography>{route.params.service.name} </Typography>
    )
}
