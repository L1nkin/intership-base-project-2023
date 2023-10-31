import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks';
import { NavigationBackButton } from '@shared/ui/molecules/navigation-back-button/navigation-back-button';
import { PaymentsScreenBottomTabProps, PaymentsStackParamList } from '@processes/routing/types';
import { PaymentsListScreen, MobileNetworkScreen } from '@processes/routing/screens';
import { PaymentScreen } from '@processes/routing/screens/payments-screens';


const Stack = createNativeStackNavigator<PaymentsStackParamList>()

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

export const PaymentsNavigator: React.FC<PaymentsScreenBottomTabProps> = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerShown: true,
                    headerLargeTitleShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeft() {
                        return (<NavigationBackButton onPress={() => navigation.goBack(null)} />)
                    },
                })}
            >
                <Stack.Screen component={PaymentsListScreen} name='PaymentsList' options={
                    {
                        title: 'Платежи',
                        headerLargeTitle: true,
                        headerLeft() {
                            return undefined
                        },
                    }
                } />
                <Stack.Screen component={MobileNetworkScreen} name='MobileNetwork' options={
                    ({ route }) => ({
                        title: route.params.title,
                    })}
                />
                <Stack.Screen component={PaymentScreen} name='Payment' options={
                    ({ route }) => ({
                        title: route.params.service.name,
                    })}
                />
            </Stack.Navigator>
        </Wrapper>
    )
}

