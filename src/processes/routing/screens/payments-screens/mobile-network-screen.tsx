import React, { useCallback } from 'react';
import { MobileNetworkContainer } from '@pages/payments/servieces-list';
import { MobileNetworkScreenStackProps, PaymentsStackParamList } from "@processes/routing/types";
import { PaymentServiceUI } from '@shared/api/payment-categories';

export const MobileNetworkScreen: React.FC<MobileNetworkScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback((screenName: keyof PaymentsStackParamList, service: PaymentServiceUI) => {
        if (screenName === 'Payment') {
            navigation.navigate(screenName, { service })
        }
    }, [navigation])

    return <MobileNetworkContainer services={route.params.services!} navigateTo={navigateTo} />
}

