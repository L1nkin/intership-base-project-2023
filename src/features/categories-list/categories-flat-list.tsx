/* eslint-disable no-unused-vars */
import { Category } from '@shared/api/types'
import React from 'react'
import { FlatList, StyleProp, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'

type Props = {
    items: Category[]
    style?: StyleProp<ViewStyle>

    onPress(id: string): void
}

export const CategoriesFlatList = ({ items, style, onPress }: Props) => {

    return (
        <FlatList
            style={style}
            data={items}
            renderItem={({ item }) => {
                return (
                    <FlatListItemWitIcon id={item.category_id} name={item.category_name} icon={item.category_icon} onPress={onPress} />
                )
            }}
            ItemSeparatorComponent={() => <FlatListSeparator />}
        />
    )
}
