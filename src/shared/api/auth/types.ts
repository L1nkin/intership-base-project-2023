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

export type EnterBody = {
    guestToken: string
    password: string
}

export type EnterResponse = {
    accessToken: string
    refreshToken: string
}

export type RefreshTokenResponse = {
    refreshToken: string
}