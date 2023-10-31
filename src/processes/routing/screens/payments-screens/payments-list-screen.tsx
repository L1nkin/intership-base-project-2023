import React from 'react';
import { PaymentsListContainer } from '@pages/payments/payments-list';
import { PaymentsListScreenStackProps, PaymentsStackParamList } from '@processes/routing/types';
import { PaymentServiceUI } from '@shared/api/payment-categories';

export const PaymentsListScreen: React.FC<PaymentsListScreenStackProps> = ({ navigation }) => {
    const navigateTo = (screenName: keyof PaymentsStackParamList, title: string, services?: PaymentServiceUI[]) => {
        switch (screenName) {
            case 'MobileNetwork':
                navigation.navigate(screenName, { services, title })
                break;
        }
    }

    return <PaymentsListContainer navigateTo={navigateTo} />
}

