import React, { TouchableOpacityProps } from 'react-native'
import { styled } from '@ui/theme'
import { IconBack } from '@shared/ui/icons'

const Wrapper = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

type Props = TouchableOpacityProps

export const NavigationBackButton = ({ ...rest }: Props) => {
    return (
        <Wrapper activeOpacity={0.7} {...rest}>
            <IconBack color='#fff' />
        </Wrapper>
    )
}
