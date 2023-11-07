import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React, { memo, useCallback } from 'react'
import { Image } from 'react-native'

type Props = {
    id: string
    name: string
    icon: string
    onPress: (id: string) => void
}

const Wrapper = styled.Pressable`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 15px ;
    padding: 0px 15px;
`

const IconView = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FlatListItemWitIcon = memo(function FlatListItemWitIcon({ id, name, icon, onPress }: Props) {
    const onPressItem = useCallback(() => {
        onPress(id)
    }, [id, onPress])
    return (
        <Wrapper onPress={onPressItem}>
            <IconView>
                <Image width={24} height={24} source={{ uri: icon }} />
            </IconView>
            <Typography variant="body15Regular">{name}</Typography>
        </Wrapper>
    )
})