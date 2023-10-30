/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'
import { PrimaryButton } from '@shared/ui/molecules'
import { PaymentsStackParamList } from '@app/app-navigation/Screens/types'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 16px;
`

type Props = {
    navigateTo(screenName: keyof PaymentsStackParamList): void
}

export const PaymentsListContainer = ({ navigateTo }: Props) => {
    return (
        <Wrapper>
            <Typography variant="largeTitle">PaymentsList page!</Typography>
            <PrimaryButton onPress={() => navigateTo('MobileNetwork')} >MobileNetworkScreen</PrimaryButton>
            <PrimaryButton onPress={() => navigateTo('HousingCommunalService')}>HousingCommunalServiceScreen</PrimaryButton>
            <PrimaryButton onPress={() => navigateTo('Internet')}>Internet</PrimaryButton>
        </Wrapper>
    )
}
