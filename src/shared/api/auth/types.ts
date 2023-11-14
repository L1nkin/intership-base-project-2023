export type OTPResponse = {
    otpId: string
    otpCode: string
    otpLen: number
}

export type ConfirmBody = {
    otpId: string
    otpCode: string
    phone: string
}

export type GuestToken = {
    guestToken: string
}