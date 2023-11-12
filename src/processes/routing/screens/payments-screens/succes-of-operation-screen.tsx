import React, { useCallback } from 'react';
import { SuccessOfOperationContainer } from '@pages/payments/success-of-operation';
import { SuccessOfOperationScreenStackProps } from '@processes/routing/types';

export const SuccessOfOperationScreen: React.FC<SuccessOfOperationScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback(() => {
        navigation.navigate('PaymentsList')
    }, [navigation])

    return <SuccessOfOperationContainer success={route.params.success} sum={route.params.sum} onPress={navigateTo} />
}

