import React, { useCallback } from 'react'
import { AuthOTP } from '@pages/auth/otp-code'
import { OTPCodeScreenStackProps } from '../../types'

export const OTPCodeScreen: React.FC<OTPCodeScreenStackProps> = ({ navigation }) => {
    const navigateNext = useCallback(() => {
        navigation.navigate('Password')
    }, [navigation])

    const navigateToError = useCallback(() => {
        navigation.navigate('ErrorScreen')
    }, [navigation])

    const navigateToStart = useCallback(() => {
        navigation.navigate('PhoneNumber')
    }, [navigation])

    return (
        <AuthOTP navigateNext={navigateNext} navigateToError={navigateToError} navigateToStart={navigateToStart} />
    )
}
