import { styled } from '@shared/ui/theme'
import React from 'react'
import { StyleSheet } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Wrapper = styled.View`
    padding: 0px 15px;
`

const styles = StyleSheet.create({
    skeletonItem: {
        flexGrow: 1
    }
})

export const SkeletonWrapper = () => {
    return (
        <Wrapper>
            <SkeletonPlaceholder borderRadius={4} backgroundColor="#403A47" highlightColor="#706D76" speed={3000}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                    <SkeletonPlaceholder.Item style={styles.skeletonItem} marginLeft={15}>
                        <SkeletonPlaceholder.Item height={20} borderRadius={10} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </Wrapper>
    )
}
