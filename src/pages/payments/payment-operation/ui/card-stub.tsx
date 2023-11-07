import { Typography } from '@shared/ui/atoms'
import { IconCardWhite, IconChevronDown } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import React from 'react'

const HeaderTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.tertiary};
`

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding: 20px;
    display: flex;
    gap: 40px;
`

const CardView = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`

const CardInfoView = styled.View`
    flex-grow: 1;
`

export const CardStub = () => {
    return (
        <Wrapper>
            <HeaderTypography variant='body15Semibold'>Карта для оплаты</HeaderTypography>
            <CardView>
                <IconCardWhite color='#fff' />
                <CardInfoView>
                    <Typography variant='body15Regular' >Карта зарплатная</Typography>
                    <Typography variant='caption1' >457 334,00 ₽</Typography>
                </CardInfoView>
                <IconChevronDown color='#706D76' />
            </CardView>
        </Wrapper>
    )
}
