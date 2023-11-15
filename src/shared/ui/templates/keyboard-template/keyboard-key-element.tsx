import React, { ReactNode } from 'react';
import { Typography } from '@shared/ui/atoms';
import { IconDelete } from '@shared/ui/icons';
import { styled } from '@shared/ui/theme';
import { useTheme } from '@shared/hooks';
import { TKeyButtonPressed, TKeyboardButtonType } from './types';

const ElementKey = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex: 33.33%;
`

type ElementKeyViewProps = {
    type: TKeyboardButtonType
    value?: number
    leftBottomView: ReactNode
    onPressKey: TKeyButtonPressed
}

export const ElementKeyView = ({ type, value, leftBottomView, onPressKey }: ElementKeyViewProps) => {
    const theme = useTheme()

    switch (type) {
        case 'number':
            return <ElementKey activeOpacity={0.7} onPress={() => onPressKey(type, value)}>
                <Typography variant="largeTitle">{value}</Typography>
            </ElementKey>

        case 'remove':
            return <ElementKey activeOpacity={0.7} onPress={() => onPressKey(type, value)}>
                <IconDelete color={theme.palette.text.primary} />
            </ElementKey>

        case 'view':
            return <ElementKey activeOpacity={1}>{leftBottomView}</ElementKey>
    }
}