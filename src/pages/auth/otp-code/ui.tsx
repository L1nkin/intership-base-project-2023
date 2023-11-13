import { Typography } from '@shared/ui/atoms';
import { styled } from '@shared/ui/theme';
import React from 'react';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthOTP = () => {
  return (
    <Wrapper>
      <Typography>OTPCode</Typography>
    </Wrapper>
  )
}