import {
    PaymentServiceAPI,
    PaymentServiceUI,
    PaymentCategoryAPI,
    PaymentCategoryUI,
    PaymentCategoriesAPI,
    PaymentCategoriesUI
} from "./types"

export const mapPaymentServiceToUI = (response: PaymentServiceAPI): PaymentServiceUI => {
    return {
        id: response.service_id,
        name: response.service_name,
        icon: response.service_icon
    }
}

const mapPaymentCategoryToUI = (response: PaymentCategoryAPI): PaymentCategoryUI => {
    return {
        id: response.category_id,
        name: response.category_name,
        icon: response.category_icon,
        services: response.services.map(mapPaymentServiceToUI)
    }
}

export const mapPaymentCategoriesToUI = (response: PaymentCategoriesAPI): PaymentCategoriesUI => {
    return {
        categories: response.category.map(mapPaymentCategoryToUI)
    }
}