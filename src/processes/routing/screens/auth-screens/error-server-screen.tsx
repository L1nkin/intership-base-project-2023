import React from 'react'
import { ErrorServer } from '@pages/auth/error-server'
import { ErrorScreenStackProps } from '../../types'

export const ErrorServerScreen: React.FC<ErrorScreenStackProps> = ({ navigation }) => {
    return (
        <ErrorServer goBack={navigation.goBack} />
    )
}
