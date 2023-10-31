import React from 'react'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContainer = () => {
    return (
        <Wrapper>
            <Typography variant="largeTitle">Main page!</Typography>
        </Wrapper>
    )
}
