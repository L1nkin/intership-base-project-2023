import React, { useCallback } from 'react'
import { SuccessAuth } from '@pages/auth/success-auth'
import { setAuth } from '@shared/api/auth/store'
import { SuccessScreenStackProps } from '../../types'

export const SuccessAuthScreen: React.FC<SuccessScreenStackProps> = () => {
    const navigateNext = useCallback(() => {
        setAuth(true)
    }, [])
    return (
        <SuccessAuth navigateToNext={navigateNext} />
    )
}
