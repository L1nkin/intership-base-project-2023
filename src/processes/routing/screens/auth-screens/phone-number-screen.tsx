import React, { useCallback } from 'react'
import { AuthPhoneNumberWriting } from '@pages/auth/phone-number-login'
import { PhoneNumberScreenStackProps } from '../../types'

export const PhoneNumberScreen: React.FC<PhoneNumberScreenStackProps> = ({ navigation }) => {
    const navigateNext = useCallback(() => {
        navigation.navigate('OTPCode')
    }, [navigation])

    const navigateToError = useCallback(() => {
        navigation.navigate('ErrorScreen')
    }, [navigation])
    return (
        <AuthPhoneNumberWriting navigateNext={navigateNext} navigateToError={navigateToError} />
    )
}
