import { $otpStore } from '@entities/auth/model/store';
import { Typography } from '@shared/ui/atoms';
import { styled } from '@shared/ui/theme';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthOTP = () => {
  const otpCode = useStore($otpStore)
  useEffect(() => {
    console.log(otpCode)
  })

  return (
    <Wrapper>
      <Typography>OTPCode</Typography>
    </Wrapper>
  )
}