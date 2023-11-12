import React, { useCallback, useRef, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { PaymentServiceUI, getPaymentServiceInfo } from '@shared/api/payments'
import { PhoneInput } from '@features/payment-phone-input'
import { WritingSumForm } from '@features/writing-sum-form'
import { PrimaryButton } from '@shared/ui/molecules'
import { Platform, ScrollView, TextInput } from 'react-native'
import { Mask } from 'react-native-mask-input'
import { useQuery } from '@tanstack/react-query'
import { CardStub } from './ui/card-stub'
import { useCheckFields, usePhoneNumber } from './model'

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
    navigateTo: (success: boolean, sum: number) => void
}

const phoneMask: Mask = ['+', '7', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/]

export const PaymentOperation = ({ service, navigateTo }: Props) => {
    const { data } = useQuery({ queryKey: ['service_info'], queryFn: () => getPaymentServiceInfo(service.id) })
    const { phoneNumber, onChangePhoneNumber, pressedClose, handlePhoneNumberFocus } = usePhoneNumber()
    const [sumValue, setSumValue] = useState(0)
    const {
        continueButtonPressed,
        isValidNumber,
        isValidSum,
    } = useCheckFields({ phoneNumber, sumValue, additionalData: data, navigateTo })

    const phoneRef = useRef<Partial<TextInput>>(null)
    const sumRef = useRef<Partial<TextInput>>(null)

    const onChangeSum = useCallback((text: number) => {
        setSumValue(text)
    }, [])

    const onPressIn = useCallback(() => {
        if (phoneRef?.current?.blur && sumRef?.current?.blur) {
            phoneRef?.current?.blur()
            sumRef?.current?.blur()
        }
    }, [])

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
                            placeholder="Номер телефона"
                            keyboardType="number-pad"
                            onChangeText={(masked) => onChangePhoneNumber(masked)}
                            pressedClose={pressedClose}
                            onFocus={() => handlePhoneNumberFocus(true)}
                            onEndEditing={() => handlePhoneNumberFocus(false)}
                            mask={phoneMask}
                            innerRef={phoneRef}
                        />
                        <WritingSumForm innerRef={sumRef} isValid={isValidSum} value={sumValue} onChange={onChangeSum} />
                        <ContinueButton onPressIn={onPressIn}
                            onPress={continueButtonPressed}>Продолжить</ContinueButton>
                    </ContentWrapper>
                </ScrollView>
            </KeyboardWrapper >
        </Wrapper>
    )
}
