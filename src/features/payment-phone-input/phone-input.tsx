import React from 'react';
import { styled } from '@ui/theme'
import { IconClose } from '@shared/ui/icons';
import { Input } from '@shared/ui/atoms/input';
import { Image } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
import { useTheme } from '@shared/hooks';

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

const InputText = styled(Input) <{ isValid: boolean }>`
    flex-grow: 1;
    color: ${({ isValid, theme }) => isValid ? theme.palette.text.primary : theme.palette.indicator.error}
`

const PressedCloseIcon = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

type Props = {
    icon: string
    isValid?: boolean
    pressedClose: () => void
}

export const PhoneInput = ({ icon, isValid = true, pressedClose, ...props }: Props & MaskInputProps) => {
    const theme = useTheme()

    return (
        <Wrapper>
            <InputWrapper>
                <Image source={{ uri: icon }} width={24} height={24} />
                <InputText
                    isValid={isValid}
                    variant="body15Regular"
                    placeholderTextColor={theme.palette.text.tertiary}
                    {...props}
                />
                <PressedCloseIcon activeOpacity={0.7} onPress={pressedClose}>
                    <IconClose color={theme.palette.text.tertiary} />
                </PressedCloseIcon>
            </InputWrapper>
        </Wrapper>
    )
}
