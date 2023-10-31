/* eslint-disable no-unused-vars */
import React from 'react'
import { FlatList, StyleProp, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'
import { PaymentsFlatListItem } from './types'

type Props = {
    items: PaymentsFlatListItem[]
    style?: StyleProp<ViewStyle>
    isLoading: boolean

    onPress(id: string): void
}

export const PaymentsFlatList = ({ items, style, isLoading, onPress }: Props) => {

    if (isLoading) {
        return <></>
    }

    return (
        <FlatList
            style={style}
            data={items}
            renderItem={({ item }) =>
                <FlatListItemWitIcon
                    {...item}
                    onPress={onPress}
                />
            }
            ItemSeparatorComponent={() => <FlatListSeparator />}
        />
    )
}
