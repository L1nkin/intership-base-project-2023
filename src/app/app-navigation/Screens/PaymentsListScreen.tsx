import React from 'react';
import { PaymentsListContainer } from '@flows/some-flow-name/pages';
import { Service } from '@shared/api/types';

import { PaymentsListScreenStackProps, PaymentsStackParamList } from "./types";

export const PaymentsListScreen: React.FC<PaymentsListScreenStackProps> = ({ navigation }) => {
    const navigateTo = (screenName: keyof PaymentsStackParamList, title: string, services?: Service[]) => {
        switch (screenName) {
            case 'MobileNetwork':
                navigation.navigate(screenName, { services, title })
                break;
            case 'HousingCommunalService':
                navigation.navigate(screenName, { services, title })
                break;
            case 'Internet':
                navigation.navigate(screenName, { services, title })
                break;
        }
    }

    return <PaymentsListContainer navigateTo={navigateTo} />
}

