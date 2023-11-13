import { styled } from '@shared/ui/theme';
import React from 'react';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding: 16px;
`

export const AuthPasswordWriting = () => {
  return (
    <Wrapper></Wrapper>
  )
}