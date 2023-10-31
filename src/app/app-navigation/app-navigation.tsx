import React from 'react'
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconBankomat, IconMainProduct, IconPayment, IconUser } from '@shared/ui/icons'

import { AppBottomTabParamList } from './Screens/types'
import { MainScreen } from './Screens/MainScreen'
import { PaymentsStack } from './Screens/PaymentsStack'
import { ATMsScreen } from './Screens/ATMsScreen'
import { ProfileScreen } from './Screens/ProfileScreen'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

const Tab = createBottomTabNavigator<AppBottomTabParamList>()

export const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: theme.palette.background.primary,
          },
          tabBarStyle: {
            backgroundColor: theme.palette.background.secondary,
            borderTopWidth: 0,
          },
          headerTintColor: theme.palette.text.primary,
          headerShown: false,
          tabBarIcon({ focused }) {
            switch (route.name) {
              case 'Main':
                return <IconMainProduct color={focused ? '#F678BA' : '#C2C1C6'} />
              case 'Payments':
                return <IconPayment color={focused ? '#F678BA' : '#C2C1C6'} />
              case 'ATMs':
                return <IconBankomat color={focused ? '#F678BA' : '#C2C1C6'} />
              case 'Profile':
                return <IconUser color={focused ? '#F678BA' : '#C2C1C6'} />
            }
          },
          tabBarActiveTintColor: '#F678BA',
          tabBarInactiveTintColor: '#C2C1C6',
        })}
      >
        <Tab.Screen component={MainScreen} name='Main' options={{ title: 'Главная' }} />
        <Tab.Screen component={PaymentsStack} name='Payments' options={{ title: 'Платежи' }} />
        <Tab.Screen component={ATMsScreen} name='ATMs' options={{ title: 'Банкоматы' }} />
        <Tab.Screen component={ProfileScreen} name='Profile' options={{ title: 'Профиль' }} />
      </Tab.Navigator>
    </Wrapper>
  )
}
