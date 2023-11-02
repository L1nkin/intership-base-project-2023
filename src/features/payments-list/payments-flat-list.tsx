/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'
import { PaymentsFlatListItem } from './types'
import { SkeletonList } from './skeleton-list'
import { ListEmptyComponent } from './list-empty-component'

type Props = {
    items: PaymentsFlatListItem[]
    style?: StyleProp<ViewStyle>
    isLoading: boolean

    onPress(id: string): void
}

const keyExtractor = (item: PaymentsFlatListItem): string => item.id

export const PaymentsFlatList = ({ items, style, isLoading, onPress }: Props) => {

    console.log(items)
    const renderItem = useCallback(({ item }: ListRenderItemInfo<PaymentsFlatListItem>) => (
        <FlatListItemWitIcon
            {...item}
            onPress={onPress}
        />
    ), [onPress])

    return (
        isLoading
            ? <SkeletonList style={style} />
            : <FlatList
                style={style}
                data={items}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <FlatListSeparator />}
                ListEmptyComponent={() => <ListEmptyComponent />}
                contentContainerStyle={({ flexGrow: 1 })}
            />
    )
}
