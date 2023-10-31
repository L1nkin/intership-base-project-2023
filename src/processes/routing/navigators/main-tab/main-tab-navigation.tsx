import React from 'react'
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconBankomat, IconMainProduct, IconPayment, IconUser } from '@shared/ui/icons'
import { AppBottomTabParamList } from '@processes/routing/types'
import {
    MainScreen,
    ATMsScreen,
    ProfileScreen
} from '@processes/routing/screens'

import { PaymentsNavigator } from './payments-navigator'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

const Tab = createBottomTabNavigator<AppBottomTabParamList>()

export const MainTabNavigation = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },
                    tabBarStyle: {
                        backgroundColor: theme.palette.background.secondary,
                        borderTopWidth: 0,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerShown: false,
                    tabBarActiveTintColor: theme.palette.bottomBar.active,
                    tabBarInactiveTintColor: theme.palette.bottomBar.inactive,
                }}
            >
                <Tab.Screen
                    component={MainScreen}
                    name='Main'
                    options={{
                        title: 'Главная',
                        tabBarIcon: ({ color }) => <IconMainProduct color={color} />
                    }}
                />
                <Tab.Screen
                    component={PaymentsNavigator}
                    name='Payments'
                    options={{
                        title: 'Платежи',
                        tabBarIcon: ({ color }) => <IconPayment color={color} />
                    }}
                />
                <Tab.Screen
                    component={ATMsScreen}
                    name='ATMs'
                    options={{
                        title: 'Банкоматы',
                        tabBarIcon: ({ color }) => <IconBankomat color={color} />
                    }}
                />
                <Tab.Screen
                    component={ProfileScreen}
                    name='Profile'
                    options={{
                        title: 'Профиль',
                        tabBarIcon: ({ color }) => <IconUser color={color} />
                    }}
                />
            </Tab.Navigator>
        </Wrapper>
    )
}