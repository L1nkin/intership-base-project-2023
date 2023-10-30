import React from 'react';
import { PaymentsListContainer } from '@flows/some-flow-name/pages';

import { PaymentsListScreenStackProps, PaymentsStackParamList } from "./types";

export const PaymentsListScreen: React.FC<PaymentsListScreenStackProps> = ({ navigation }) => {
    const navigateTo = (screenName: keyof PaymentsStackParamList) => {
        navigation.navigate(screenName)
    }

    return <PaymentsListContainer navigateTo={navigateTo} />
}

