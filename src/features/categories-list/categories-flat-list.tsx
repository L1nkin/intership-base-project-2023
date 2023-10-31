/* eslint-disable no-unused-vars */
import { SimpleModel } from '@shared/api/types'
import React from 'react'
import { FlatList, StyleProp, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'

type Props = {
    items: SimpleModel[]
    style?: StyleProp<ViewStyle>

    onPress(id: string): void
}

export const CategoriesFlatList = ({ items, style, onPress }: Props) => {

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
