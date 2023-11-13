import { api } from "@shared/config"
import { OTPResponse } from "./types"

export const login = async (phone: string): Promise<OTPResponse> => {
    const response = await api.post('api/auth/login', { phone })
    return response.data
}