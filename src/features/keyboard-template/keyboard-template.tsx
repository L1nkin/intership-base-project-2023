import React from 'react';
import { styled } from '@shared/ui/theme';
import { Typography } from '@shared/ui/atoms';
import { IconDelete } from '@shared/ui/icons';
import { useTheme } from '@shared/hooks';
import { TKeyButtonPressed, TKeyboardButton, TKeyboardButtonType, } from './types';
import { TimerView } from './timer-view';

type Props = {
    valueList: TKeyboardButton[][]
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
    onPressKey: TKeyButtonPressed
}

const ElementKeyView = ({ type, value, onPressKey }: ElementKeyViewProps) => {
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

        case 'timer':
            return <ElementKey activeOpacity={1}><TimerView onKeyPress={onPressKey} /></ElementKey>
    }
}

export const KeyboardTemplate = ({ valueList, onKeyPressed }: Props) => {

    return (
        <StyledSeparatedElements>
            {valueList.map((row, index) => {
                return (
                    <ElementsRow key={index}>
                        {row.map((element, elemIndex) => {
                            return <ElementKeyView key={elemIndex} {...element} onPressKey={onKeyPressed} />
                        })}
                    </ElementsRow>
                )
            })}
        </StyledSeparatedElements>
    )
}