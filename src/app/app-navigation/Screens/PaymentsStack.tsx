import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks';

import { PaymentsScreenBottomTabProps, PaymentsStackParamList } from "./types";
import { PaymentsListScreen } from './PaymentsListScreen';
import { MobileNetworkScreen } from './MobileNetworkScreen';
import { HousingCommunalServiceScreen } from './HousingCommunalServiceScreen';
import { InternetScreen } from './InternetScreen';


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
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerShown: true,
                    headerLargeTitle: true,
                    headerLargeTitleShadowVisible: false
                }}
            >
                <Stack.Screen component={PaymentsListScreen} name='PaymentsList' options={{ title: 'Платежи' }} />
                <Stack.Screen component={MobileNetworkScreen} name='MobileNetwork' options={
                    ({ route }) => ({
                        title: route.params.title,
                        headerLargeTitle: false,
                        headerBackTitleVisible: false
                    })}
                />
                <Stack.Screen component={HousingCommunalServiceScreen} name='HousingCommunalService' options={
                    ({ route }) => ({
                        title: route.params.title,
                        headerLargeTitle: false,
                        headerBackTitleVisible: false
                    })}
                />
                <Stack.Screen component={InternetScreen} name='Internet' options={
                    ({ route }) => ({
                        title: route.params.title,
                        headerLargeTitle: false,
                        headerBackTitleVisible: false
                    })}
                />
            </Stack.Navigator>
        </Wrapper>
    )
}

