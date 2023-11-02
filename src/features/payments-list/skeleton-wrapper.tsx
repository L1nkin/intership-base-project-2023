import { styled } from '@shared/ui/theme'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Wrapper = styled.View`
    padding: 0px 15px;
`
export const SkeletonWrapper = () => {
    return (
        <Wrapper>
            <SkeletonPlaceholder borderRadius={4} backgroundColor='#403A47' highlightColor='#706D76' speed={3000}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                    <SkeletonPlaceholder.Item style={{ flexGrow: 1 }} marginLeft={15}>
                        <SkeletonPlaceholder.Item height={20} borderRadius={10} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </Wrapper>
    )
}
