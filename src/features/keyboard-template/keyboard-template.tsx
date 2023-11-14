import React from 'react';
import { styled } from '@shared/ui/theme';
import { Typography } from '@shared/ui/atoms';
import { IconDelete } from '@shared/ui/icons';
import { useTheme } from '@shared/hooks';
import { TKeyButtonPressed, TKeyboardButton, TKeyboardButtonType, } from './types';

type Props = {
    leftBottomView: JSX.Element
    onKeyPressed: TKeyButtonPressed
}

const StyledSeparatedElements = styled.View`
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
`

const ElementsRow = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

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
    leftBottomView: JSX.Element
    onPressKey: TKeyButtonPressed
}

const valueListMock: TKeyboardButton[][] = [
    [{ type: 'number', value: 1 }, { type: 'number', value: 2 }, { type: 'number', value: 3 }],
    [{ type: 'number', value: 4 }, { type: 'number', value: 5 }, { type: 'number', value: 6 }],
    [{ type: 'number', value: 7 }, { type: 'number', value: 8 }, { type: 'number', value: 9 }],
    [{ type: 'view' }, { type: 'number', value: 0 }, { type: 'remove' }]
]

const ElementKeyView = ({ type, value, leftBottomView, onPressKey }: ElementKeyViewProps) => {
    const theme = useTheme()

    switch (type) {
        case 'number':
            return <ElementKey activeOpacity={0.7} onPress={() => onPressKey(type, value)}>
                <Typography variant='largeTitle'>{value}</Typography>
            </ElementKey>

        case 'remove':
            return <ElementKey activeOpacity={0.7} onPress={() => onPressKey(type, value)}>
                <IconDelete color={theme.palette.text.primary} />
            </ElementKey>

        case 'view':
            return <ElementKey activeOpacity={1}>{leftBottomView}</ElementKey>
    }
}

export const KeyboardTemplate = ({ leftBottomView, onKeyPressed }: Props) => {

    return (
        <StyledSeparatedElements>
            {valueListMock.map((row, index) => {
                return (
                    <ElementsRow key={index}>
                        {row.map((element, elemIndex) => {
                            return <ElementKeyView key={elemIndex} {...element} leftBottomView={leftBottomView} onPressKey={onKeyPressed} />
                        })}
                    </ElementsRow>
                )
            })}
        </StyledSeparatedElements>
    )
}