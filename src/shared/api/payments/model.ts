import axios from "axios"

import { api } from "@shared/config"
import { HistoryRequestBody, PaymentCategoriesAPI, PaymentServiceInfo } from "./types"

export const getPaymentCategories = async (): Promise<PaymentCategoriesAPI | undefined> => {
    const response = await axios.get<PaymentCategoriesAPI>("https://github.com/kode-frontend/files/raw/main/categories.json")
    return response.data
}

export const getPaymentList = async () => {
    const response = await api.get<PaymentCategoriesAPI>('api/core/payment/list')
    return response.data
}

export const getPaymentServiceInfo = async (service_id: string) => {
    const response = await api.get<PaymentServiceInfo>(`api/core/payment/${service_id}`)
    return response.data
}

export const postPaymentOperation = async (body: HistoryRequestBody) => {
    const response = await api.post('api/core/history', body)
    return response.data
}