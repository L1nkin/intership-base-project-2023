import React, { useCallback } from 'react';
import { PaymentsListContainer } from '@pages/payments/payments-list';
import { PaymentsListScreenStackProps } from '@processes/routing/types';
import { PaymentServiceUI } from '@shared/api/payment-categories';

export const PaymentsListScreen: React.FC<PaymentsListScreenStackProps> = ({ navigation }) => {
    const navigateTo = useCallback((title: string, services?: PaymentServiceUI[]) => {
        navigation.navigate('ServicesList', { services, title })
    }, [navigation])

    return <PaymentsListContainer submit={navigateTo} />
}

