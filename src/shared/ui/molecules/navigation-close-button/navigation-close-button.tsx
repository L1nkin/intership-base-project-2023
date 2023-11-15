import React, { TouchableOpacityProps } from 'react-native'
import { styled } from '@ui/theme'
import { IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

type Props = TouchableOpacityProps

export const NavigationCloseButton = ({ ...rest }: Props) => {
    const theme = useTheme()
    return (
        <Wrapper activeOpacity={0.7} {...rest}>
            <IconClose color={theme.palette.accent.tertiary} />
        </Wrapper>
    )
}
