import { useState, useCallback } from "react"

const phoneNumberPrefix = '+7'

export const usePhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [isFocus, setIsFocus] = useState(false)


    const handlePhoneNumberFocus = useCallback((isFocus: boolean) => {
        if (isFocus) {
            setIsFocus(true)
        } else {
            setIsFocus(false)
        }
        if (isFocus && !phoneNumber.includes(phoneNumberPrefix)) {
            setPhoneNumber(phoneNumberPrefix)
            return
        }
        if (phoneNumber.trim() === phoneNumberPrefix || phoneNumber.trim().length <= 2) {
            setPhoneNumber('')
            return
        }
    }, [phoneNumber])

    return { phoneNumber, isValidNumber, isFocus, setPhoneNumber, setIsFocus, setIsValidNumber, handlePhoneNumberFocus }
}