import { styled } from '@shared/ui/theme'
import React from 'react'
import { StyleProp, ViewProps } from 'react-native'

import { SkeletonWrapper } from './skeleton-wrapper'
import { FlatListSeparator } from './flat-list-separator'

const Wrapper = styled.View`
`
type Props = {
    style: StyleProp<ViewProps>
}

export const SkeletonList = ({ style }: Props) => {
    return (
        <Wrapper style={style}>
            <SkeletonWrapper />
            <FlatListSeparator />
            <SkeletonWrapper />
            <FlatListSeparator />
            <SkeletonWrapper />
        </Wrapper>
    )
}