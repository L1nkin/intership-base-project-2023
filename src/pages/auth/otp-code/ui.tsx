import { $otpStore, $phoneNumberStore, getOtpCodeFx } from '@entities/auth/model/store';
import { KeyboardTemplate } from '@features/keyboard-template/keyboard-template';
import { TKeyboardButton, TKeyboardButtonType } from '@features/keyboard-template/types';
import { OTPInput } from '@features/pin-input';
import { getGuestTokenFx } from '@shared/api/auth';
import { Loader, Typography } from '@shared/ui/atoms';
import { styled } from '@shared/ui/theme';
import { useStore } from 'effector-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  padding-top: 40%;
  gap: 20px;
  align-items: center;
`

const LoaderWrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoLabel = styled(Typography)`
  padding: 0 60px;
`

const ErrorTryCountLabel = styled(Typography)`
  color: ${({ theme }) => theme.palette.indicator.error};
`

type Props = {
  navigateNext: () => void
  navigateToError: () => void
  navigateToStart: () => void
}

const valueListMock: TKeyboardButton[][] = [
  [{ type: 'number', value: 1 }, { type: 'number', value: 2 }, { type: 'number', value: 3 }],
  [{ type: 'number', value: 4 }, { type: 'number', value: 5 }, { type: 'number', value: 6 }],
  [{ type: 'number', value: 7 }, { type: 'number', value: 8 }, { type: 'number', value: 9 }],
  [{ type: 'timer' }, { type: 'number', value: 0 }, { type: 'remove' }]
]

export const AuthOTP = ({ navigateNext, navigateToError, navigateToStart }: Props) => {
  const [otpCode, setOTPCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(true)
  const [sendingTryCount, setSendingTryCount] = useState(0)
  const validOtpCode = useStore($otpStore)
  const maximumCodeLength = 4;
  const phoneNumberStore = useStore($phoneNumberStore)
  const isLoading = useStore(getGuestTokenFx.pending)

  const invalidOtp = useCallback(() => {
    setIsValidCode(false)
    setSendingTryCount((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (otpCode.length === maximumCodeLength) {
      if (otpCode === validOtpCode.otpCode) {
        (
          async () => {
            try {
              await getGuestTokenFx({ otpCode: validOtpCode.otpCode, otpId: validOtpCode.otpId, phone: phoneNumberStore })
              navigateNext()
            } catch {
              navigateToError()
              invalidOtp()
            }
          }
        )()
        return
      }
      if (sendingTryCount === 5) {
        Alert.alert(
          'Вы ввели неверно код 5 раз',
          'Данная сессия авторизации будет сброшена!',
          [{ text: 'Выход', onPress: navigateToStart }]

        )
        return
      }
      invalidOtp()
      return
    }
    setIsValidCode(true)
  }, [navigateNext, navigateToError, navigateToStart, otpCode, validOtpCode])



  const onKeyPressed = useCallback((type: TKeyboardButtonType, value?: number) => {
    switch (type) {
      case 'number':
        otpCode.length < maximumCodeLength && setOTPCode((prev) => prev + value)
        break;
      case 'remove':
        setOTPCode((prev) => prev.slice(0, -1))
        break;
      case 'timer':
        try {
          getOtpCodeFx(phoneNumberStore)
        } catch {
          navigateToError()
        }

    }
  }, [navigateToError, otpCode.length, phoneNumberStore])

  if (isLoading) {
    return <LoaderWrapper>
      <Loader iconProps={{ color: '#fff' }} />
    </LoaderWrapper>
  }

  return (
    <Wrapper>
      <InfoLabel variant='body15Regular' align='center'>На ваш номер отправлено SMS с кодом подтверждения.</InfoLabel>
      <OTPInput
        code={otpCode}
        isValid={isValidCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
      />
      {isValidCode ? undefined : <ErrorTryCountLabel align='center' variant='caption2'>Неверный код. Осталось {6 - sendingTryCount} попытки</ErrorTryCountLabel>}
      <KeyboardTemplate onKeyPressed={onKeyPressed} valueList={valueListMock} />
    </Wrapper>
  )
}