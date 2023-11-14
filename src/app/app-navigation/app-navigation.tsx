import React from 'react'
import { MainTabNavigation } from '@processes/index'
import { AuthNavigator } from '@processes/routing/navigators'


export const AppNavigation = () => {
  const isAuth = false

  if (!isAuth) {
    return <AuthNavigator />
  }

  return (
    <MainTabNavigation />
  )
}
