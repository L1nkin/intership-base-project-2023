import React from 'react';
import { styled } from '@ui/theme'
import { IconSearch } from '@shared/ui/icons';
import { Input } from '@shared/ui/atoms/input';
import { StyleProp, TextInputProps } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.content.primary};
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    height: 46px;
`

const InputText = styled(Input)`
    flex-grow: 1;
`

type Props = {
    style?: StyleProp<View>
}

export const SearchBar = ({ style, ...props }: Props & TextInputProps) => {

    return (
        <Wrapper style={style}>
            <IconSearch />
            <InputText variant='body15Regular' placeholderTextColor='#706D76' {...props} />
        </Wrapper>
    )
}
