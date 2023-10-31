/* eslint-disable no-unused-vars */
import { Service } from '@shared/api/types'
import React from 'react'
import { FlatList, StyleProp, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'

type Props = {
    items: Service[]
    style?: StyleProp<ViewStyle>

    onPress(id: string): void
}

export const ServicesFlatList = ({ items, style, onPress }: Props) => {
    return (
        <FlatList
            style={style}
            data={items}
            renderItem={({ item }) => {
                return (
                    <FlatListItemWitIcon id={item.service_id} name={item.service_name} icon={item.service_icon} onPress={onPress} />
                )
            }}
            ItemSeparatorComponent={() => <FlatListSeparator />}
        />
    )
}
