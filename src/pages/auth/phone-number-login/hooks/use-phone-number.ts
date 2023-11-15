import { useState, useCallback } from "react"

const phoneNumberPrefix = '+7'

export const usePhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [serverPhone, setServerPhone] = useState('')
    const [isValidNumber, setIsValidNumber] = useState(true)

    const onChangePhoneNumber = useCallback((phone: string, unmaskedPhone: string) => {
        setServerPhone(unmaskedPhone)
        setIsValidNumber(true)
        setPhoneNumber(phone)
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

    return { phoneNumber, isValidNumber, serverPhone, setIsValidNumber, onChangePhoneNumber, handlePhoneNumberFocus }
}