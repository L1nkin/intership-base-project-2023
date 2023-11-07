import React from 'react'
import { styled } from '@ui/theme'

import { Input as InputComponent } from './input'

const InputWithPadding = styled(InputComponent)`
  padding: ${({ theme }) => theme.spacing(1.5)}px
    ${({ theme }) => theme.spacing(2)}px;
`

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui',
}

export default Meta

export const Input = () => (
  <Wrapper>
    <InputWithPadding variant="title" placeholder='Title 34 bold' />
    <InputWithPadding variant="largeTitle" placeholder='Large title 28 medium' />
    <InputWithPadding variant="subtitle" placeholder='Subtitle 20 semibold' />
    <InputWithPadding variant="body20" placeholder='Body 20 regular' />
    <InputWithPadding variant="body17Medium" placeholder='Body 17 medium' />
    <InputWithPadding variant="body17Regular" placeholder='Body 1 17 regular' />
    <InputWithPadding variant="body15Regular" placeholder='Body 2 15 regular' />
    <InputWithPadding variant="body15Semibold" placeholder='Body 15 semibold' />
    <InputWithPadding variant="caption1" placeholder='Caption 1 13' />
    <InputWithPadding variant="caption2" placeholder='Caption 2 11' />
    <InputWithPadding variant="button" placeholder='Button' />
  </Wrapper>
)
