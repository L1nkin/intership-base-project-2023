import { useState, useCallback } from "react"
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated"

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

export const useAnimation = () => {
    const keyboard = useAnimatedKeyboard()

    const translateButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -keyboard.height.value }],
        };
    });
    const translatePhoneViewStyle = useAnimatedStyle(() => {
        let translateY = 0
        if (keyboard.state.value === 1 || keyboard.state.value === 2) translateY = -50

        return {
            transform: [{ translateY: translateY }],
        }
    })

    return { translateButtonStyle, translatePhoneViewStyle }
}