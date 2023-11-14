import React, { useCallback } from 'react'
import { AuthPasswordWriting } from '@pages/auth/password-writing'
import { PasswordScreenStackProps } from '../../types'

export const PasswordScreen: React.FC<PasswordScreenStackProps> = ({ navigation }) => {

    const navigateNext = useCallback(() => {
        navigation.navigate('SuccessScreen')
    }, [navigation])

    const navigateToError = useCallback(() => {
        navigation.navigate('ErrorScreen')
    }, [navigation])

    return (
        <AuthPasswordWriting navigateToError={navigateToError} navigateNext={navigateNext} />
    )
}
