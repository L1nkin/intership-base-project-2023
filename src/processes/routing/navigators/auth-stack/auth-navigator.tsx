import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { AuthStackParamList } from '@processes/routing/types';
import { OTPCodeScreenScreen, PasswordScreen, PhoneNumberScreen } from '@processes/routing/screens/auth-screens';


const Stack = createNativeStackNavigator<AuthStackParamList>()

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

export const AuthNavigator = () => {

    return (
        <Wrapper>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen component={PhoneNumberScreen} name='PhoneNumber' />
                <Stack.Screen component={OTPCodeScreenScreen} name='OTPCode' />
                <Stack.Screen component={PasswordScreen} name='Password' />
            </Stack.Navigator>
        </Wrapper>
    )
}

