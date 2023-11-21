import React, { ReactNode } from 'react';
import { styled } from '@shared/ui/theme';
import Animated from 'react-native-reanimated';
import { useKeyboardShowing } from '@shared/hooks';
import { TKeyButtonPressed, TKeyboardButton, } from './types';
import { ElementKeyView } from './keyboard-key-element';

const StyledSeparatedElements = styled(Animated.View)`
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: -280px;
    left: 0;
    right: 0;
    height: 280px;
`

const ElementsRow = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const valueListMock: TKeyboardButton[][] = [
    [{ type: 'number', value: 1 }, { type: 'number', value: 2 }, { type: 'number', value: 3 }],
    [{ type: 'number', value: 4 }, { type: 'number', value: 5 }, { type: 'number', value: 6 }],
    [{ type: 'number', value: 7 }, { type: 'number', value: 8 }, { type: 'number', value: 9 }],
    [{ type: 'view' }, { type: 'number', value: 0 }, { type: 'remove' }]
]



type Props = {
    leftBottomView: ReactNode
    isShowing: boolean
    onKeyPressed: TKeyButtonPressed
}

export const KeyboardTemplate = ({ leftBottomView, isShowing, onKeyPressed }: Props) => {
    const { showingKeyboardStyle } = useKeyboardShowing(isShowing)

    return (
        <StyledSeparatedElements style={showingKeyboardStyle} >
            {valueListMock.map((row, index) => {
                return (
                    <ElementsRow key={index}>
                        {row.map((element, elemIndex) => {
                            return <ElementKeyView key={elemIndex.toString()} {...element} leftBottomView={leftBottomView} onPressKey={onKeyPressed} />
                        })}
                    </ElementsRow>
                )
            })}
        </StyledSeparatedElements>
    )
}