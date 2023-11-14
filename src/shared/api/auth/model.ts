import { api } from "@shared/config"
import { ConfirmBody, GuestToken, OTPResponse } from "./types"

export const login = async (phone: string): Promise<OTPResponse> => {
    const response = await api.post('api/auth/login', { phone })
    return response.data
}

export const confirm = async ({ otpCode, otpId, phone }: ConfirmBody): Promise<GuestToken> => {
    const response = await api.post('api/auth/confirm', { otpCode, otpId, phone })
    return response.data
}