import React from 'react';
import { styled } from '@ui/theme'
import { IconClose } from '@shared/ui/icons';
import { Input } from '@shared/ui/atoms/input';
import { Image } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding: 20px;
`

const InputWrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.content.primary};
    height: 56px;
    border-radius: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing(3)}px;
    gap: 16px;
`

const InputText = styled(Input) <{ $isValid: boolean }>`
    flex-grow: 1;
    color: ${({ $isValid }) => $isValid ? '#fff' : '#FB6176'}
`

const PressedCloseIcon = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

type Props = {
    icon: string
    isValid?: boolean,

    pressedClose: () => void
}

export const PhoneInput = ({ icon, isValid = true, pressedClose, ...props }: Props & MaskInputProps) => {

    return (
        <Wrapper>
            <InputWrapper>
                <Image source={{ uri: icon }} width={24} height={24} />
                <InputText $isValid={isValid} variant='body15Regular' placeholderTextColor='#706D76' {...props} />
                <PressedCloseIcon activeOpacity={0.7} onPress={pressedClose}>
                    <IconClose color='#706D76' />
                </PressedCloseIcon>
            </InputWrapper>
        </Wrapper>
    )
}
