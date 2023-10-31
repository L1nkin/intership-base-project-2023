import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React, { memo } from 'react'
import { Image } from 'react-native'

type Props = {
    id: string
    name: string
    icon: string

    // eslint-disable-next-line no-unused-vars
    onPress(id: string): void
}

const Wrapper = styled.Pressable`
    flex:1;
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

// eslint-disable-next-line react/display-name
export const FlatListItemWitIcon = memo(({ id, name, icon, onPress }: Props) => {
    return (
        <Wrapper onPress={() => onPress(id)}>
            <IconView>
                <Image width={24} height={24} source={{ uri: icon }} />
            </IconView>
            <Typography variant='body15Regular'>{name}</Typography>
        </Wrapper>
    )
})