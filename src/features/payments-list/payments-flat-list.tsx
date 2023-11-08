import React, { useCallback } from 'react'
import { FlatList, ListRenderItemInfo, RefreshControl, StyleProp, StyleSheet, ViewStyle } from 'react-native'

import { FlatListItemWitIcon } from './flat-list-item-with-icon'
import { FlatListSeparator } from './flat-list-separator'
import { PaymentsFlatListItem } from './types'
import { SkeletonList } from './skeleton-list'
import { ListEmptyComponent } from './list-empty-component'

type Props = {
    items: PaymentsFlatListItem[]
    style?: StyleProp<ViewStyle>
    isLoading: boolean
    refreshing?: boolean
    onPress(id: string): void
    refreshControl?: () => void
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1
    }
})

const keyExtractor = (item: PaymentsFlatListItem): string => item.id

export const PaymentsFlatList = ({ items, style, isLoading, refreshing, onPress, refreshControl }: Props) => {
    const renderItem = useCallback(({ item }: ListRenderItemInfo<PaymentsFlatListItem>) => (
        <FlatListItemWitIcon
            {...item}
            onPress={onPress}
        />
    ), [onPress])

    if (isLoading) {
        return <SkeletonList style={style} />
    }
    return (<FlatList
        style={style}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <FlatListSeparator />}
        ListEmptyComponent={() => <ListEmptyComponent />}
        contentContainerStyle={styles.contentContainerStyle}
        refreshControl={
            refreshing != undefined
                ? <RefreshControl tintColor={'#fff'} refreshing={refreshing} onRefresh={refreshControl} />
                : undefined}
    />
    )
}
