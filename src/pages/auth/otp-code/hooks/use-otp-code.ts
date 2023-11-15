import { getGuestTokenFx } from "@shared/api/auth";
import { OTPResponse } from "@shared/api/auth/types";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

type UseOtpProps = {
    validOtpCode: OTPResponse
    phoneNumber: string
    navigateNext: () => void
    navigateToError: () => void
    navigateToStart: () => void
}

export const useOtpCode = ({ validOtpCode, phoneNumber, navigateToError, navigateNext, navigateToStart }: UseOtpProps) => {
    const [otpCode, setOTPCode] = useState("");
    const [isValidCode, setIsValidCode] = useState(true)
    const [sendingTryCount, setSendingTryCount] = useState(0)
    const maximumCodeLength = 4;

    const invalidOtp = useCallback(() => {
        setIsValidCode(false)
        setSendingTryCount((prev) => prev + 1)
    }, [])

    useEffect(() => {
        setIsValidCode(true)
        if (otpCode.length !== maximumCodeLength) {
            return
        }
        if (otpCode === validOtpCode.otpCode) {
            getGuestTokenFx({
                otpCode: validOtpCode.otpCode,
                otpId: validOtpCode.otpId,
                phone: phoneNumber
            }).then(() => {
                navigateNext()
            }).catch(() => {
                navigateToError()
                invalidOtp()
            })
            return
        }
        invalidOtp()
    }, [invalidOtp, navigateNext, navigateToError, navigateToStart, otpCode, phoneNumber, validOtpCode])

    useEffect(() => {
        if (sendingTryCount === 5) {
            Alert.alert(
                'Вы ввели неверно код 5 раз',
                'Данная сессия авторизации будет сброшена!',
                [{ text: 'Выход', onPress: navigateToStart }]

            )
        }
    }, [navigateToStart, sendingTryCount])

    return { otpCode, isValidCode, setOTPCode, maximumCodeLength, sendingTryCount }
}
