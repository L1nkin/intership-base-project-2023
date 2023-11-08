import { createSnack } from "@entities/snack-bar"
import { useCallback, useState } from "react"
import { Alert } from "react-native"

const phoneNumberPrefix = '+7'

export const usePhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('')//16
    const [isValidNumber, setIsValidNumber] = useState(true)

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
            setIsValidNumber(true)
            return
        }
        setIsValidNumber(phoneNumber.length === 16)
    }, [phoneNumber])

    return { phoneNumber, isValidNumber, onChangePhoneNumber, pressedClose, handlePhoneNumberFocus }
}

type CheckFieldsParams = {
    phoneNumber: string
    sumValue: number

    goBack: () => void
}

export const useCheckFields = ({ phoneNumber, sumValue, goBack }: CheckFieldsParams) => {
    const continueButtonPressed = useCallback(() => {
        if (phoneNumber.length === 16 && sumValue <= 20000 && sumValue > 0) {
            Alert.alert('Успех', '', [{ text: "Ок", onPress: (goBack) }])
            return
        }
        //Alert.alert('Проверьте введенные данные')
        createSnack({ message: 'Проверьте введенные данные', duration: 2000 })
    }, [goBack, phoneNumber.length, sumValue])

    return { continueButtonPressed }
}