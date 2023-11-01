import React, { useCallback } from 'react';
import { ServicesListContainer } from '@pages/payments/servieces-list';
import { ServicesListScreenStackProps, PaymentsStackParamList } from "@processes/routing/types";
import { PaymentServiceUI } from '@shared/api/payment-categories';

export const ServicesListScreen: React.FC<ServicesListScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback((screenName: keyof PaymentsStackParamList, service: PaymentServiceUI) => {
        if (screenName === 'Payment') {
            navigation.navigate(screenName, { service })
        }
    }, [navigation])

    return <ServicesListContainer services={route.params.services!} navigateTo={navigateTo} />
}

