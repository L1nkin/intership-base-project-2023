export type PaymentServiceAPI = {
    service_id: string,
    service_name: string,
    service_icon: string
}

export type PaymentServiceUI = {
    id: string,
    name: string,
    icon: string
}

export type PaymentCategoryUI = {
    id: string,
    name: string,
    icon: string,
    services: PaymentServiceUI[]
}

export type PaymentCategoryAPI = {
    category_id: string,
    category_name: string,
    category_icon: string,
    services: PaymentServiceAPI[]
}

export type PaymentCategoriesAPI = {
    category: PaymentCategoryAPI[]
}

export type PaymentCategoriesUI = {
    categories: PaymentCategoryUI[]
}

export type PaymentServiceInfo = {
    service_id: number
    cashback_percentage: number
    recipient_mask: string
    comment_mask?: string
}

export type HistoryRequestBody = {
    card_id: number
    service_id: string
    size: number
    size_cashback?: number
    comment?: string
    period_from: string
    period_to: string
}

export type PostRequestStatus = {
    success: boolean
}