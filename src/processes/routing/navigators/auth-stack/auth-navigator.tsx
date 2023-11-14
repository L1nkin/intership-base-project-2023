import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { AuthStackParamList } from '@processes/routing/types';
import { ErrorServerScreen, OTPCodeScreen, PasswordScreen, PhoneNumberScreen, LoadingScreen, SuccessAuthScreen } from '@processes/routing/screens';
import { useTheme } from '@shared/hooks';
import { NavigationCloseButton } from '@shared/ui/molecules/navigation-close-button';
import { Alert } from 'react-native';


const Stack = createNativeStackNavigator<AuthStackParamList>()

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

const exitAlert = (navigation: any) => {
    Alert.alert('Вы точно хотите выйти?', undefined, [{ text: "Отмена" }, { text: 'Выйти', onPress: () => navigation.navigate('PhoneNumber') }])
}

export const AuthNavigator = () => {
    const theme = useTheme()
    return (
        <Wrapper>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.palette.background.primary,
                },
                headerTintColor: theme.palette.text.primary,
                headerBackTitleVisible: false,
                headerShadowVisible: false,
            }}>
                <Stack.Screen component={PhoneNumberScreen} name='PhoneNumber' />
                <Stack.Screen component={OTPCodeScreen} name='OTPCode' options={{
                    gestureEnabled: false
                }} />
                <Stack.Screen component={LoadingScreen} name='LoadingScreen' />
                <Stack.Screen component={PasswordScreen} name='Password' options={({ navigation }) => ({
                    gestureEnabled: false,
                    headerShown: true,
                    headerTitle: '',
                    headerLeft() {
                        return (<NavigationCloseButton onPress={() => exitAlert(navigation)} />)
                    }
                })} />
                <Stack.Screen component={ErrorServerScreen} name='ErrorScreen' options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: '',
                    headerLeft() {
                        return (<NavigationCloseButton onPress={() => navigation.goBack(null)} />)
                    }
                })} />
                <Stack.Screen component={SuccessAuthScreen} name='SuccessScreen' />
            </Stack.Navigator>
        </Wrapper>
    )
}

