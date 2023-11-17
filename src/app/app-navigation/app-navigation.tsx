import React from 'react'
import { MainTabNavigation } from '@processes/index'
import { AuthNavigator } from '@processes/routing/navigators'
import { useStore } from 'effector-react'
import { $isAuth } from '@shared/api/auth/store'


export const AppNavigation = () => {
  const isAuth = useStore($isAuth)

  if (!isAuth) {
    return <AuthNavigator />
  }

  return (
    <MainTabNavigation />
  )
}
