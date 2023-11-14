import React, { useCallback } from 'react'
import { SuccessAuth } from '@pages/auth/success-auth'
import { SuccessScreenStackProps } from '../../types'

export const SuccessAuthScreen: React.FC<SuccessScreenStackProps> = ({ navigation }) => {
    const navigateNext = useCallback(() => {
        console.log('aaaaaaaaaa')
    }, [navigation])
    return (
        <SuccessAuth navigateToNext={navigateNext} />
    )
}
