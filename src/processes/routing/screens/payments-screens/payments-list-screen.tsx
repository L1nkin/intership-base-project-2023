import React, { useCallback } from 'react';
import { PaymentsListContainer } from '@pages/payments/payments-list';
import { PaymentsListScreenStackProps } from '@processes/routing/types';

export const PaymentsListScreen: React.FC<PaymentsListScreenStackProps> = ({ navigation }) => {
    const navigateTo = useCallback((title: string, id?: string) => {
        navigation.navigate('ServicesList', { id, title })
    }, [navigation])

    return <PaymentsListContainer submit={navigateTo} />
}

