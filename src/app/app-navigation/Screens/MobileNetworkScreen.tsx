import React, { useCallback } from 'react';
import { MobileNetworkContainer } from '@flows/some-flow-name/pages';

import { MobileNetworkScreenStackProps } from "./types";

export const MobileNetworkScreen: React.FC<MobileNetworkScreenStackProps> = ({ route }) => {
    const navigateTo = useCallback((id: string) => {
        console.log(id)
    }, [])

    return <MobileNetworkContainer services={route.params.services!} navigateTo={navigateTo} />
}

