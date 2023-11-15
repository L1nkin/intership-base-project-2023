import React, { Ref, useCallback, useState } from 'react';
import { useTheme } from "@shared/hooks"
import { Input } from "@shared/ui/atoms"
import { IconEye, IconEyeOff, IconRecoverPassword } from "@shared/ui/icons"
import { styled } from "@shared/ui/theme"
import { MaskInputProps } from "react-native-mask-input"
import { TextInput } from 'react-native';

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.content.primary};
    border-radius: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(3)}px;
    gap: 10px;
`

const WrapperSecureIcon = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

const InputText = styled(Input) <{ $isValid: boolean }>`
    flex-grow: 1;
    color: ${({ theme, $isValid }) => $isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`

type Props = {
    innerRef: Ref<Partial<TextInput>>
} & MaskInputProps

export const PasswordInput = ({ innerRef, ...props }: Props) => {
    const theme = useTheme()
    const [isSecure, setIsSecure] = useState(true)

    const onPress = useCallback(() => {
        setIsSecure((prev) => !prev)
    }, [])
    return (
        <Wrapper>
            <IconRecoverPassword color={theme.palette.accent.primary} />
            <InputText innerRef={innerRef} secureTextEntry={isSecure} $isValid={true} variant="body15Regular" placeholderTextColor={theme.palette.text.tertiary} {...props} />
            <WrapperSecureIcon activeOpacity={0.7} onPress={onPress}>
                {
                    isSecure ? <IconEyeOff color={theme.palette.content.tertiary} /> : <IconEye color={theme.palette.accent.tertiary} />
                }
            </WrapperSecureIcon>
        </Wrapper>
    )
}