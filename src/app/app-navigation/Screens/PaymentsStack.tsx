import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks';
import { NavigationBackButton } from '@shared/ui/molecules/navigation-back-button/navigation-back-button';

import { PaymentsScreenBottomTabProps, PaymentsStackParamList } from "./types";
import { PaymentsListScreen } from './PaymentsListScreen';
import { MobileNetworkScreen } from './MobileNetworkScreen';
import { HousingCommunalServiceScreen } from './HousingCommunalServiceScreen';
import { InternetScreen } from './InternetScreen';
import { PaymentScreen } from './PaymentScreen';


const Stack = createNativeStackNavigator<PaymentsStackParamList>()

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding-bottom: 4px;
`

export const PaymentsStack: React.FC<PaymentsScreenBottomTabProps> = () => {
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
                <Stack.Screen component={HousingCommunalServiceScreen} name='HousingCommunalService' options={
                    ({ route }) => ({
                        title: route.params.title,
                    })}
                />
                <Stack.Screen component={InternetScreen} name='Internet' options={
                    ({ route }) => ({
                        title: route.params.title,
                    })}
                />
                <Stack.Screen component={PaymentScreen} name='Payment' options={
                    ({ route }) => ({
                        title: route.params.service.service_name,
                    })}
                />
            </Stack.Navigator>
        </Wrapper>
    )
}

