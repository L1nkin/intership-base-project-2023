import React from 'react'
import { MainTabNavigation } from '@processes/index'
import { AuthNavigator } from '@processes/routing/navigators'


export const AppNavigation = () => {
  const isAuth = true

  if (isAuth) {
    return <AuthNavigator />
  }

  return (
    <MainTabNavigation />
  )
}
