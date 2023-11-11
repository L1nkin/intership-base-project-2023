import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks';
import { NavigationBackButton } from '@ui/molecules';
import { PaymentsScreenBottomTabProps, PaymentsStackParamList } from '@processes/routing/types';
import { PaymentsListScreen, ServicesListScreen } from '@processes/routing/screens';
import { PaymentScreen } from '@processes/routing/screens/payments-screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Platform } from 'react-native';
import { SuccessOfOperationScreen } from '@processes/routing/screens/payments-screens/succes-of-operation-screen';


const Stack = createNativeStackNavigator<PaymentsStackParamList>()

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

const tabHiddenRoutes = ["ServicesList", "Payment", "SuccessOfOperation"];

export const PaymentsNavigator: React.FC<PaymentsScreenBottomTabProps> = ({ navigation, route }) => {
    const theme = useTheme()

    React.useLayoutEffect(() => {
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route)!)) {
            navigation.setOptions({
                tabBarStyle: {
                    display: 'none'
                }
            });
        } else {
            navigation.setOptions({
                tabBarStyle: {
                    display: 'flex',
                    backgroundColor: theme.palette.background.primary,
                    borderTopWidth: 0,
                }
            });
        }
    }, [navigation, route, theme.palette.background.primary]);

    return (
        <Wrapper>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerShown: true,
                    headerLargeTitleShadowVisible: Platform.OS === 'ios',
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerLeft() {
                        return (<NavigationBackButton onPress={() => navigation.goBack(null)} />)
                    }
                })}

            >
                <Stack.Screen component={PaymentsListScreen} name='PaymentsList' options={
                    {
                        title: 'Платежи',
                        headerLargeTitle: Platform.OS === 'ios',
                        headerLeft() {
                            return undefined
                        }
                    }
                } />
                <Stack.Screen component={ServicesListScreen} name='ServicesList' options={
                    ({ route }) => ({
                        title: route.params.title,

                    })}
                />
                <Stack.Screen component={PaymentScreen} name='Payment' options={
                    ({ route }) => ({
                        title: route.params.service.name,
                    })}
                />
                <Stack.Screen component={SuccessOfOperationScreen} name='SuccessOfOperation' options={
                    {
                        headerShown: false
                    }
                } />
            </Stack.Navigator>
        </Wrapper>
    )
}

