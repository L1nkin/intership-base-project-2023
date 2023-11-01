/* eslint-disable no-unused-vars */
import { Input, Typography } from '@shared/ui/atoms'
import { Chip } from '@shared/ui/atoms/chip/chip'
import { styled } from '@shared/ui/theme'
import React, { useCallback, useState } from 'react'
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { IconRubs24 } from '@shared/ui/icons'

import { convertToNumber } from './lib'

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    display: flex;
    margin-bottom: 20px;
    gap: 16px;
`

const HeaderTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.tertiary};
    margin: 15px 20px;
`

const SumInput = styled.View`
    margin: 0px 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
`

const ChipItem = styled(Chip)`
    margin: 0 20px 15px;
`

const SeparatorLine = styled.View<{
    $isFocused: boolean,
    $isValid: boolean
}>`
    background-color: ${({ $isFocused, $isValid }) => $isFocused ? '#6C78E6' : ($isValid ? '#403A47' : '#FB6176')};
    height: 1px;
    margin: 0 20px;
`

const CashBack = styled(Typography)`
    margin: 0px 20px 15px;
    height: 28px;
    color: ${({ theme }) => theme.palette.text.secondary}
`

const chipsValues: number[] = [100, 500, 1000, 2500, 5000, 10000, 15000, 20000]

type Props = {
    value: number
    onChange: (value: number) => void
}

export const WritingSumForm = ({ value, onChange }: Props) => {
    const [focusState, setFocusState] = useState(false)
    const onChangeSum = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const text = e.nativeEvent.text
        onChange(convertToNumber(text))
    }, [onChange])

    return (
        <Wrapper>
            <HeaderTypography>Сумма</HeaderTypography>
            <SumInput>
                <Input
                    variant='largeTitle'
                    value={value ? String(value) : ''}
                    onChange={onChangeSum}
                    keyboardType='number-pad'
                    placeholder='0'
                    placeholderTextColor={'#fff'}
                    onFocus={() => setFocusState(true)}
                    onEndEditing={() => setFocusState(false)}
                />
                <IconRubs24 size={34} color='#fff' />
            </SumInput>
            <SeparatorLine $isFocused={focusState} $isValid={value <= 20000 && value > 0} />
            {
                value
                    ? <CashBack variant='caption1'>Ваш кэшбэк составит 10%: {value / 10} руб</CashBack>
                    : <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={chipsValues}
                        renderItem={({ item }) => <ChipItem value={item} onPress={() => onChange(item)} />}
                    />
            }
        </Wrapper>
    )
}
