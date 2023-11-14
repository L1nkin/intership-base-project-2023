import { authApi } from "@shared/config/api"
import { ConfirmBody, EnterBody, EnterResponse, GuestToken, OTPResponse } from "./types"

export const login = async (phone: string): Promise<OTPResponse> => {
    const response = await authApi.post('api/auth/login', { phone })
    return response.data
}

export const confirm = async ({ otpCode, otpId, phone }: ConfirmBody): Promise<GuestToken> => {
    const response = await authApi.post('api/auth/confirm', { otpCode, otpId, phone })
    return response.data
}

export const enter = async ({ guestToken, password }: EnterBody): Promise<EnterResponse> => {
    const response = await authApi.post('/api/auth/enter', { guestToken, password })
    return response.data
}