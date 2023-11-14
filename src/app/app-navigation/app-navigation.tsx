import React from 'react'
import { MainTabNavigation } from '@processes/index'
import { AuthNavigator } from '@processes/routing/navigators'
import { useStore } from 'effector-react'
import { $authStorage } from '@shared/api/auth/store'


export const AppNavigation = () => {
  const isAuth = useStore($authStorage)

  if (!isAuth) {
    return <AuthNavigator />
  }

  return (
    <MainTabNavigation />
  )
}
