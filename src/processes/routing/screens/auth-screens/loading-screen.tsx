import React from 'react'
import { styled } from '@shared/ui/theme'
import { Loader } from '@shared/ui/atoms'
import { LoadingScreenStackProps } from '../../types'

const Wrapper = styled.View`
    background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingScreen: React.FC<LoadingScreenStackProps> = () => {
    return (
        <Wrapper>
            <Loader iconProps={{ color: '#fff' }} />
        </Wrapper>
    )
}
