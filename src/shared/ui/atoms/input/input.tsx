import { StyleProp, TextInput, TextStyle } from 'react-native'
import React, { Ref, forwardRef, useImperativeHandle, useRef } from 'react'
import { styled } from '@ui/theme'
import { TypographyVariants } from '@ui/theme/types'
import MaskInput, { MaskInputProps } from 'react-native-mask-input'

type TTypographyAlignment = 'center' | 'left' | 'right'

export const BaseTextInput = forwardRef(function InputText(props: MaskInputProps, innerRef: Ref<Partial<TextInput>>) {
    const inputRef = useRef<TextInput>(null);
    useImperativeHandle(innerRef, () => ({
        blur: () => {
            inputRef?.current?.blur();
        },
    }));
    return <MaskInput ref={inputRef} {...props} />
})

const InputVariant = styled(BaseTextInput) <{
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
    innerRef?: Ref<Partial<TextInput>>
}

export const Input = ({
    variant = 'body20',
    align,
    style,
    innerRef,
    ...props
}: Props & MaskInputProps) => {
    return (
        <InputVariant ref={innerRef} $align={align} $variant={variant} style={style} {...props} />
    )
}
