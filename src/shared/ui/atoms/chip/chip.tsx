import { styled } from '@shared/ui/theme'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Typography } from '../typography'

const Wrapper = styled.TouchableOpacity`
    height: 28px;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
    display: flex;
    justify-content: center;
    align-content:center;
`

const ValueTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0px 15px;
`

type Props = {
    value: number
}

export const Chip = ({ value, ...rest }: Props & TouchableOpacityProps) => {
    return (
        <Wrapper activeOpacity={0.7} {...rest}>
            <ValueTypography variant='caption1'>{value} ₽</ValueTypography>
        </Wrapper>
    )
}
