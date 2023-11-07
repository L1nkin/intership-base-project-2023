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