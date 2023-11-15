import { PasswordInput } from '@features/password-input';
import { Typography } from '@shared/ui/atoms';
import { IconLogoSmall } from '@shared/ui/icons';
import { PrimaryButton } from '@shared/ui/molecules';
import { styled } from '@shared/ui/theme';
import React, { useCallback, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';
import { createSnack } from '@entities/snack-bar';
import { TextInput } from 'react-native';
import { $guestTokenStore, getTokensFx } from '@shared/api/auth';
import { useStore } from 'effector-react';
import { isValidPassword } from './lib';
import { useKeyboardAnimation } from './hooks';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 60px;
`

const InputLabelWrapper = styled(Animated.View)`
  display: flex;
  align-items: center;
  gap: 20px;
`

const AnimatedButton = styled(Animated.View)`
    position: absolute;
  bottom: 20px;
  left: 16px;
  right: 16px;
`

type Props = {
  navigateToError: () => void
  navigateNext: () => void
}

export const AuthPasswordWriting = ({ navigateToError, navigateNext }: Props) => {
  const [password, setPassword] = useState('')
  const guestToken = useStore($guestTokenStore)
  const { translateButtonStyle, translatePasswordViewStyle } = useKeyboardAnimation()
  const inputRef = useRef<Partial<TextInput>>(null)

  const onPress = useCallback(async () => {
    if (password.length < 5) {
      createSnack({ message: 'Длина пароля должна быть не менее 5 символов', duration: 3000 })
      return
    }
    if (!isValidPassword(password)) {
      createSnack({ message: 'Пароль может содержать только цифры и буквы', duration: 3000 })
      return
    }
    try {
      await getTokensFx({ guestToken, password })
      navigateNext()
    } catch {
      navigateToError()
    }
  }, [guestToken, navigateNext, navigateToError, password])

  const onPressIn = useCallback(() => {
    if (inputRef?.current?.blur) {
      inputRef.current.blur()
    }
  }, [])

  return (
    <Wrapper>
      <IconLogoSmall />
      <InputLabelWrapper style={translatePasswordViewStyle}>
        <Typography variant="body15Regular">Введите пароль</Typography>
        <PasswordInput innerRef={inputRef} value={password} onChangeText={setPassword} />
      </InputLabelWrapper>
      <AnimatedButton style={translateButtonStyle}>
        <PrimaryButton onPress={onPress} onPressIn={onPressIn}>Войти</PrimaryButton>
      </AnimatedButton>
    </Wrapper>
  )
}