import React from 'react'
import { styled } from '@ui/theme'

import { Chip as ChipComponent } from './chip'


const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui',
}

export default Meta

export const Chip = () => (
  <Wrapper>
    <ChipComponent value={100} />
    <ChipComponent value={1000} />
    <ChipComponent value={999999} />
    <ChipComponent value={1000000000} />
  </Wrapper>
)
