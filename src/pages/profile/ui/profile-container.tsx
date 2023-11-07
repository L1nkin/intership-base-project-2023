import React from 'react'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileContainer = () => {
    return (
        <Wrapper>
            <Typography variant="largeTitle">Profile page!</Typography>
        </Wrapper>
    )
}
