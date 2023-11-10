import { createSnack } from "@entities/snack-bar"
import { useCallback, useState } from "react"
import { Alert } from "react-native"

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

    goBack: () => void
}

export const useCheckFields = ({ phoneNumber, sumValue, goBack }: CheckFieldsParams) => {
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [isValidSum, setIsValidSum] = useState(true)

    const continueButtonPressed = useCallback(() => {
        const isValidPhoneNumber = phoneNumber.length === 16
        const isValidSumValue = sumValue > 0 && sumValue <= 20000
        setIsValidSum(isValidSumValue)
        setIsValidNumber(isValidPhoneNumber)

        if (isValidPhoneNumber && isValidSumValue) {
            Alert.alert('Успех', '', [{ text: "Ок", onPress: (goBack) }])
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
    }, [goBack, phoneNumber.length, sumValue])

    return { continueButtonPressed, isValidNumber, isValidSum }
}