import React from 'react'
import { styled } from '@ui/theme'
import { IconCheck, IconClose } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'
import { PrimaryButton } from '@shared/ui/molecules'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BiggestCircle = styled.View`
    height: 150px;
    width: 150px;
    border-radius: 75px;
    background-color: rgba(112, 109, 118, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`

const MiddleCircle = styled.View`
    height: 112px;
    width: 112px;
    border-radius: 56px;
    background-color: rgba(112, 109, 118, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopCircle = styled.View<{
    success: boolean
}>`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: ${({ theme, success }) => success ? theme.palette.indicator.done : theme.palette.indicator.error};
    display: flex;
    justify-content: center;
    align-items: center;
`

const SumView = styled.View`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const StatusText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
`

const ContinueButton = styled(PrimaryButton)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`

type Props = {
    success: boolean
    sum: number
    onPress: () => void
}

export const SuccessOfOperationContainer = ({ success, sum, onPress }: Props) => {
    return (
        <Wrapper>
            <BiggestCircle>
                <MiddleCircle>
                    <TopCircle success={success}>
                        {success ? <IconCheck size={40} color="#fff" /> : <IconClose size={40} color="#fff" />}
                    </TopCircle>
                </MiddleCircle>
            </BiggestCircle>
            <SumView>
                <StatusText variant='body17Regular' >{success ? 'Оплачено' : 'Платеж отклонен'}</StatusText>
                <Typography variant='largeTitle'>{sum}₽</Typography>
            </SumView>
            <ContinueButton onPress={onPress}>Продолжить</ContinueButton>
        </Wrapper>
    )
}
