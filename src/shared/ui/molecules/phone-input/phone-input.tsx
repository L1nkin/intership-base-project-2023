import React from 'react';
import { styled } from '@ui/theme'
import { IconPhone } from '@shared/ui/icons';
import { Input } from '@shared/ui/atoms/input';
import { TextInputProps, View } from 'react-native';
import { Loader } from '@shared/ui/atoms';

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
    color: ${({ $isValid }) => $isValid ? '#fff' : '#FB6176'}
`

type Props = {
    isValid?: boolean,
    isLoading?: boolean
}

export const PhoneInput = ({ isLoading = false, isValid = true, ...props }: Props & TextInputProps) => {

    return (
        <Wrapper>
            <IconPhone color={isValid ? '#6C78E6' : '#FB6176'} />
            <InputText $isValid={isValid} variant='body15Regular' inputProps={{ placeholderTextColor: '#706D76', ...props }} />
            {isLoading ? <Loader /> : <View></View>}
        </Wrapper>
    )
}
