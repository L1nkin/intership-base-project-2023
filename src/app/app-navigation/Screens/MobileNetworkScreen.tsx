import React, { useCallback } from 'react';
import { MobileNetworkContainer } from '@flows/some-flow-name/pages';
import { Service } from '@shared/api/types';

import { MobileNetworkScreenStackProps, PaymentsStackParamList } from "./types";

export const MobileNetworkScreen: React.FC<MobileNetworkScreenStackProps> = ({ navigation, route }) => {
    const navigateTo = useCallback((screenName: keyof PaymentsStackParamList, service: Service) => {
        if (screenName === 'Payment') {
            navigation.navigate(screenName, { service })
        }
    }, [navigation])

    return <MobileNetworkContainer services={route.params.services!} navigateTo={navigateTo} />
}

