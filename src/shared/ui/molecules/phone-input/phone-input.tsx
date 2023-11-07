import React from 'react';
import { styled } from '@ui/theme'
import { IconPhone } from '@shared/ui/icons';
import { Input } from '@shared/ui/atoms/input';
import { TextInputProps, View } from 'react-native';
import { Loader } from '@shared/ui/atoms';
import { useTheme } from '@shared/hooks';

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

const InputText = styled(Input) <{ $isValid: boolean }>`
    flex-grow: 1;
    color: ${({ theme, $isValid }) => $isValid ? theme.palette.text.primary : theme.palette.indicator.error}
`

type Props = {
    isValid?: boolean,
    isLoading?: boolean
}

export const PhoneInput = ({ isLoading = false, isValid = true, ...props }: Props & TextInputProps) => {
    const theme = useTheme()
    return (
        <Wrapper>
            <IconPhone color={isValid ? theme.palette.indicator.success : theme.palette.indicator.error} />
            <InputText $isValid={isValid} variant="body15Regular" placeholderTextColor={theme.palette.text.tertiary} {...props} />
            {isLoading ? <Loader /> : <View></View>}
        </Wrapper>
    )
}
