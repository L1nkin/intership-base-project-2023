import { $otpStore, $phoneNumberStore, getOtpCodeFx } from '@entities/auth/model/store';
import { KeyboardTemplate } from '@features/keyboard-template/keyboard-template';
import { TKeyboardButtonType } from '@features/keyboard-template/types';
import { OTPInput } from '@features/pin-input';
import { getGuestTokenFx } from '@shared/api/auth';
import { Loader, Typography } from '@shared/ui/atoms';
import { styled } from '@shared/ui/theme';
import { useStore } from 'effector-react';
import React, { useCallback } from 'react';
import { TimerView } from './ui/timer-view';
import { useOtpCode } from './model';

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

export const AuthOTP = ({ navigateNext, navigateToError, navigateToStart }: Props) => {
  const validOtpCode = useStore($otpStore)
  const phoneNumber = useStore($phoneNumberStore)
  const isLoading = useStore(getGuestTokenFx.pending)
  const {
    otpCode,
    setOTPCode,
    isValidCode,
    maximumCodeLength,
    sendingTryCount
  } = useOtpCode({
    validOtpCode,
    phoneNumber,
    navigateNext,
    navigateToError,
    navigateToStart
  })

  const onKeyPressed = useCallback((type: TKeyboardButtonType, value?: number) => {
    switch (type) {
      case 'number':
        otpCode.length < maximumCodeLength && setOTPCode((prev) => prev + value)
        break;
      case 'remove':
        setOTPCode((prev) => prev.slice(0, -1))
        break;
    }
  }, [maximumCodeLength, otpCode.length, setOTPCode])

  const onTimerPressed = useCallback(() => {
    try {
      getOtpCodeFx(phoneNumber)
    } catch {
      navigateToError()
    }
  }, [navigateToError, phoneNumber])

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
      <KeyboardTemplate onKeyPressed={onKeyPressed} leftBottomView={<TimerView onKeyPress={onTimerPressed} />} />
    </Wrapper>
  )
}