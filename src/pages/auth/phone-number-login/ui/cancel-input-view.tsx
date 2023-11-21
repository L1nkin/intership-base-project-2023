import React, { TouchableOpacityProps } from 'react-native'
import { styled } from '@ui/theme'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

type Props = TouchableOpacityProps

export const CancelInputView = ({ ...rest }: Props) => {
    return (
        <Wrapper activeOpacity={0.7} {...rest}>
            <Typography variant="caption1">Отмена</Typography>
        </Wrapper>
    )
}