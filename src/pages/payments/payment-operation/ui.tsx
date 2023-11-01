import React from 'react'
import { styled } from '@shared/ui/theme'
import { PaymentServiceUI } from '@shared/api/payment-categories'
import { PhoneInput } from '@features/payment-phone-input'
import { WritingSumForm } from '@features/writing-sum-form'
import { Platform, ScrollView } from 'react-native'
import { PrimaryButton } from '@shared/ui/molecules'
import { Mask } from 'react-native-mask-input'

import { CardStub } from './ui/card-stub'
import { useCheckFields, usePhoneNumber, useSumValue } from './model'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
    flex:1;
`

const ContentWrapper = styled.View`
    flex: 1;
    display: flex;
    gap: 20px;
`

const KeyboardWrapper = styled.KeyboardAvoidingView`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

const ContinueButton = styled(PrimaryButton)`
    margin: 0px 20px;
    bottom: 20px;
`

type Props = {
    service: PaymentServiceUI

    goBack: () => void
}

const phoneMask: Mask = ['+', '7', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/]

export const PaymentOperation = ({ service, goBack }: Props) => {
    const { phoneNumber, isValidNumber, onChangePhoneNumber, pressedClose, handlePhoneNumberFocus } = usePhoneNumber()
    const { sumValue, onChangeSum } = useSumValue()
    const { continueButtonPressed } = useCheckFields({ phoneNumber, sumValue, goBack })

    return (
        <Wrapper>
            <KeyboardWrapper
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
                keyboardVerticalOffset={48}>
                <ScrollView>
                    <ContentWrapper>
                        <CardStub />
                        <PhoneInput
                            icon={service.icon}
                            value={phoneNumber}
                            isValid={isValidNumber}
                            placeholder='Номер телефона'
                            onChangeText={(masked) => onChangePhoneNumber(masked)}
                            pressedClose={pressedClose}
                            onFocus={() => handlePhoneNumberFocus(true)}
                            onEndEditing={() => handlePhoneNumberFocus(false)}
                            mask={phoneMask}
                        />
                        <WritingSumForm value={sumValue} onChange={onChangeSum} />
                        <ContinueButton onPress={continueButtonPressed}>Продолжить</ContinueButton>
                    </ContentWrapper>
                </ScrollView>
            </KeyboardWrapper >
        </Wrapper>
    )
}
