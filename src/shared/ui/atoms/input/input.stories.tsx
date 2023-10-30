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
        <InputWithPadding variant="title" inputProps={{ placeholder: 'Title 34 bold' }} />
        <InputWithPadding variant="largeTitle" inputProps={{ placeholder: 'Large title 28 medium' }} />
        <InputWithPadding variant="subtitle" inputProps={{ placeholder: 'Subtitle 20 semibold' }} />
        <InputWithPadding variant="body20" inputProps={{ placeholder: 'Body 20 regular' }} />
        <InputWithPadding variant="body17Medium" inputProps={{ placeholder: 'Body 17 medium' }} />
        <InputWithPadding variant="body17Regular" inputProps={{ placeholder: 'Body 1 17 regular' }} />
        <InputWithPadding variant="body15Regular" inputProps={{ placeholder: 'Body 2 15 regular' }} />
        <InputWithPadding variant="body15Semibold" inputProps={{ placeholder: 'Body 15 semibold' }} />
        <InputWithPadding variant="caption1" inputProps={{ placeholder: 'Caption 1 13' }} />
        <InputWithPadding variant="caption2" inputProps={{ placeholder: 'Caption 2 11' }} />
        <InputWithPadding variant="button" inputProps={{ placeholder: 'Button' }} />
    </Wrapper>
)
