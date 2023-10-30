import { StyleProp, TextInputProps, TextStyle } from 'react-native'
import React from 'react'
import { styled } from '@ui/theme'
import { TypographyVariants } from '@ui/theme/types'

type TTypographyAlignment = 'center' | 'left' | 'right'

const InputVariant = styled.TextInput<{
    $variant: TypographyVariants
    $align?: TTypographyAlignment
}>`
  font-family: ${({ theme, $variant }) =>
        theme.typography[$variant].fontFamily};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].size};
  letter-spacing: ${({ theme, $variant }) =>
        theme.typography[$variant].letterSpacing};
  line-height: ${({ theme, $variant }) =>
        theme.typography[$variant].lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
  ${({ $align }) => $align && `text-align: ${$align};`}
`

type Props = {
    align?: TTypographyAlignment
    variant?: TypographyVariants
    style?: StyleProp<TextStyle>
    inputProps?: TextInputProps
}

export const Input = ({
    variant = 'body20',
    align,
    style,
    inputProps
}: Props) => {
    return (
        <InputVariant $align={align} $variant={variant} style={style} {...inputProps} />
    )
}
