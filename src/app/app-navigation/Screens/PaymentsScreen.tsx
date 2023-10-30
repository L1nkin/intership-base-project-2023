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

export const PaymentsScreen: React.FC<PaymentsScreenBottomTabProps> = () => {
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
                }}
            >
                <Stack.Screen component={PaymentsListScreen} name='PaymentsList' />
                <Stack.Screen component={MobileNetworkScreen} name='MobileNetwork' />
                <Stack.Screen component={HousingCommunalServiceScreen} name='HousingCommunalService' />
                <Stack.Screen component={InternetScreen} name='Internet' />
            </Stack.Navigator>
        </Wrapper>
    )
}

