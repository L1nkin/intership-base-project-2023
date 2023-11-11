import { createSnack } from "@entities/snack-bar"
import { postPaymentOperation } from "@shared/api/payment-categories"
import { PaymentServiceInfo } from "@shared/api/payment-categories/types"
import { useCallback, useState } from "react"

const phoneNumberPrefix = '+7'

export const usePhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const onChangePhoneNumber = useCallback((phone: string) => {
        setPhoneNumber(phone)
    }, [])

    const pressedClose = useCallback(() => {
        setPhoneNumber('')
    }, [])

    const handlePhoneNumberFocus = useCallback((isFocus: boolean) => {
        if (isFocus && !phoneNumber.includes(phoneNumberPrefix)) {
            setPhoneNumber(phoneNumberPrefix)
            return
        }
        if (phoneNumber.trim() === phoneNumberPrefix || phoneNumber.trim().length <= 2) {
            setPhoneNumber('')
            return
        }
    }, [phoneNumber])

    return { phoneNumber, onChangePhoneNumber, pressedClose, handlePhoneNumberFocus }
}

type CheckFieldsParams = {
    phoneNumber: string
    sumValue: number
    additionalData: PaymentServiceInfo
    navigateTo: (success: boolean, sum: number) => void
}

export const useCheckFields = ({ phoneNumber, additionalData, sumValue, navigateTo }: CheckFieldsParams) => {
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [isValidSum, setIsValidSum] = useState(true)

    const continueButtonPressed = useCallback(() => {
        const isValidPhoneNumber = phoneNumber.length === 16
        const isValidSumValue = sumValue > 0 && sumValue <= 20000
        setIsValidSum(isValidSumValue)
        setIsValidNumber(isValidPhoneNumber)

        if (isValidPhoneNumber && isValidSumValue) {
            postPaymentOperation({
                card_id: 0,
                service_id: `${additionalData.service_id}`,
                size: sumValue,
                period_from: "",
                period_to: ""
            }).then(res => res.success && (navigateTo(true, sumValue))).catch(error => console.log(error))
            return
        }

        if (phoneNumber.length == 0 && sumValue == 0) {
            createSnack({ message: 'Поля не могут быть пустыми', duration: 3000 })
            return
        }

        if (!isValidPhoneNumber) {
            createSnack({ message: 'Неправильно введен номер', duration: 3000 })
        }

        if (!isValidSumValue) {
            createSnack({ message: 'Некорректная сумма', duration: 3000 })
        }
    }, [additionalData, navigateTo, phoneNumber.length, sumValue])

    return { continueButtonPressed, isValidNumber, isValidSum }
}