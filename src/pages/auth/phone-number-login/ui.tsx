import { createSnack } from '@entities/snack-bar';
import { IconLogoMedium } from '@shared/ui/icons';
import { PhoneInput, PrimaryButton } from '@shared/ui/molecules';
import { styled } from '@shared/ui/theme';
import React, { useCallback, useRef } from 'react';
import { Mask } from 'react-native-mask-input';
import Animated from 'react-native-reanimated';
import { TextInput } from 'react-native';
import { getOtpCodeFx, savePhone } from '@entities/auth/model/store';
import { useStore } from 'effector-react';
import { KeyboardTemplate } from '@shared/ui/templates';
import { TKeyboardButtonType } from '@shared/ui/templates/keyboard-template/types';
import { useKeyboardAnimation, usePhoneNumber } from './hooks';
import { CancelInputView } from './ui/cancel-input-view';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
`

const LogoView = styled.View`
  display: flex;
  align-items: center;
`

const PhoneLogoView = styled(Animated.View)`
  display: flex;
  gap: 40px;
  top: 50px;
`

const LoginButtonView = styled(Animated.View)`
  position: absolute;
  bottom: 20px;
  left: 16px;
  right: 16px;
`

const phoneMask: Mask = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]

type Props = {
  navigateNext: () => void
  navigateToError: () => void
}

export const AuthPhoneNumberWriting = ({ navigateNext, navigateToError }: Props) => {
  const { phoneNumber, isValidNumber, isFocus, setPhoneNumber, setIsFocus, setIsValidNumber, handlePhoneNumberFocus } = usePhoneNumber()
  const phoneRef = useRef<Partial<TextInput>>(null)
  const { showingKeyboardStyle, translatePhoneViewStyle } = useKeyboardAnimation(isFocus)
  const isLoading = useStore(getOtpCodeFx.pending)

  const onPressIn = useCallback(() => {
    if (phoneRef?.current?.blur) {
      phoneRef?.current?.blur()
    }
  }, [])

  const onPress = useCallback(async () => {
    if (phoneNumber.length === 12) {
      try {
        savePhone(phoneNumber)
        await getOtpCodeFx(phoneNumber)
        navigateNext()
      } catch (error) {
        navigateToError()
      }
      return
    }
    setIsValidNumber(false)
    createSnack({ message: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона', duration: 3000 })
  }, [navigateNext, navigateToError, phoneNumber, setIsValidNumber])

  const onKeyPressed = useCallback((type: TKeyboardButtonType, value?: number) => {
    setIsValidNumber(true)
    switch (type) {
      case 'number':
        if (phoneNumber.length < 12) {
          setPhoneNumber((prev) => prev + value)
        }
        break;

      case 'remove':
        setPhoneNumber((prev) => prev.slice(0, -1))
        break;
    }
  }, [phoneNumber.length, setIsValidNumber, setPhoneNumber])

  const cancelOnPress = useCallback(() => {
    setPhoneNumber('')
    setIsFocus(false)
    onPressIn()
  }, [onPressIn, setIsFocus, setPhoneNumber])
  return (
    <Wrapper>
      <PhoneLogoView style={translatePhoneViewStyle}>
        <LogoView>
          <IconLogoMedium />
        </LogoView>
        <PhoneInput
          isValid={isValidNumber}
          isLoading={isLoading}
          placeholder="Телефон"
          value={phoneNumber}
          onFocus={() => handlePhoneNumberFocus(true)}
          onEndEditing={() => handlePhoneNumberFocus(false)}
          mask={phoneMask}
          innerRef={phoneRef}
          showSoftInputOnFocus={false}
        />
      </PhoneLogoView>
      <LoginButtonView style={showingKeyboardStyle}>
        <PrimaryButton onPress={onPress} onPressIn={onPressIn} >Отправить</PrimaryButton>
      </LoginButtonView>
      <KeyboardTemplate leftBottomView={<CancelInputView onPress={cancelOnPress} />} isShowing={isFocus} onKeyPressed={onKeyPressed} />
    </Wrapper>
  )
}