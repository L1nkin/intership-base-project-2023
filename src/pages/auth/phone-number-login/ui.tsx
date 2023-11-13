import { createSnack } from '@entities/snack-bar';
import { IconLogoMedium } from '@shared/ui/icons';
import { PhoneInput, PrimaryButton } from '@shared/ui/molecules';
import { styled } from '@shared/ui/theme';
import React, { useCallback, useRef } from 'react';
import { Mask } from 'react-native-mask-input';
import Animated from 'react-native-reanimated';
import { TextInput } from 'react-native';
import { getOtpCodeFx } from '@entities/auth/model/store';
import { useStore } from 'effector-react';
import { useAnimation, usePhoneNumber } from './model';

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
  const { phoneNumber, isValidNumber, serverPhone, setIsValidNumber, onChangePhoneNumber, handlePhoneNumberFocus } = usePhoneNumber()
  const phoneRef = useRef<Partial<TextInput>>(null)
  const { translateButtonStyle, translatePhoneViewStyle } = useAnimation()
  const isLoading = useStore(getOtpCodeFx.pending)

  const onPressIn = useCallback(() => {
    if (phoneRef?.current?.blur) {
      phoneRef?.current?.blur()
    }
  }, [])

  const onPress = useCallback(() => {
    if (phoneNumber.length === 18) {
      (
        async () => {
          try {
            await getOtpCodeFx(`+7${serverPhone}`)
            navigateNext()
          } catch (error) {
            navigateToError()
          }
        }
      )()
      return
    }
    setIsValidNumber(false)
    createSnack({ message: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона', duration: 3000 })
  }, [navigateNext, navigateToError, phoneNumber.length, serverPhone, setIsValidNumber])

  return (
    <Wrapper>
      <PhoneLogoView style={translatePhoneViewStyle}>
        <LogoView>
          <IconLogoMedium />
        </LogoView>
        <PhoneInput
          isValid={isValidNumber}
          isLoading={isLoading}
          placeholder='Телефон'
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          onFocus={() => handlePhoneNumberFocus(true)}
          onEndEditing={() => handlePhoneNumberFocus(false)}
          mask={phoneMask}
          keyboardType="number-pad"
          innerRef={phoneRef}
        />
      </PhoneLogoView>
      <LoginButtonView style={translateButtonStyle}>
        <PrimaryButton onPress={onPress} onPressIn={onPressIn} >Отправить</PrimaryButton>
      </LoginButtonView>
    </Wrapper>
  )
}