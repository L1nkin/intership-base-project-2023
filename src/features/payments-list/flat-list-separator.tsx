import { styled } from '@shared/ui/theme'
import React from 'react'

const SeparatorLine = styled.View`
    background-color: #403A47;
    height: 1px;
    margin: 70px;
    margin: 15px;
`

export const FlatListSeparator = () => {
    return (
        <SeparatorLine />
    )
}
