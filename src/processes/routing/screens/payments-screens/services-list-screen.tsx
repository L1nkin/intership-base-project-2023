import React, { useCallback } from 'react';
import { ServicesListContainer } from '@pages/payments/servieces-list';
import { ServicesListScreenStackProps } from "@processes/routing/types";
import { PaymentServiceUI } from '@shared/api/payment-categories';

export const ServicesListScreen: React.FC<ServicesListScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback((service: PaymentServiceUI) => {
        navigation.navigate('Payment', { service })
    }, [navigation])

    return <ServicesListContainer services={route.params.services!} submit={navigateTo} />
}

