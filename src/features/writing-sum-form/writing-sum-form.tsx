import { Input, Typography } from '@shared/ui/atoms'
import { Chip } from '@shared/ui/atoms/chip/chip'
import { styled } from '@shared/ui/theme'
import React, { Ref, useCallback, useMemo, useState } from 'react'
import { FlatList, NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native'
import { IconRubs24 } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'
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
    color: string
}>`
    background-color: ${({ color }) => color};
    height: 1px;
    margin: 0 20px;
`

const CashBack = styled(Typography)`
    margin: 0px 20px 15px;
    height: 28px;
    color: ${({ theme }) => theme.palette.text.secondary};
`

const chipsValues: number[] = [100, 500, 1000, 2500, 5000, 10000, 15000, 20000]

type Props = {
    value: number
    isValid: boolean
    innerRef?: Ref<Partial<TextInput>>
    onChange: (value: number) => void
}

export const WritingSumForm = ({ value, isValid, innerRef, onChange }: Props) => {
    const [focusState, setFocusState] = useState(false)
    const onChangeSum = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const text = e.nativeEvent.text
        onChange(convertToNumber(text))
    }, [onChange])
    const theme = useTheme()

    const separatorColor = useMemo(() => {
        if (focusState) {
            return theme.palette.indicator.success
        }
        return isValid ? theme.palette.content.secondary : theme.palette.indicator.error
    }, [focusState, isValid, theme.palette.content.secondary, theme.palette.indicator.error, theme.palette.indicator.success])

    return (
        <Wrapper>
            <HeaderTypography>Сумма</HeaderTypography>
            <SumInput>
                <Input
                    variant="largeTitle"
                    value={value ? String(value) : ""}
                    onChange={onChangeSum}
                    keyboardType="number-pad"
                    placeholder='0'
                    placeholderTextColor={"#fff"}
                    onFocus={() => setFocusState(true)}
                    onEndEditing={() => setFocusState(false)}
                    innerRef={innerRef}
                />
                <IconRubs24 size={34} color="#fff" />
            </SumInput>
            <SeparatorLine color={separatorColor} />
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
