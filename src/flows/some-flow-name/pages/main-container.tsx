import React from 'react'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`

export const MainContainer = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    return (
        <Wrapper>
            <Typography variant="largeTitle">Main page!</Typography>
        </Wrapper>
    )
}
