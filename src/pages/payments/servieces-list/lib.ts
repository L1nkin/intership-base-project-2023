import { PaymentsFlatListItem } from "@features/categories-list/types";
import { PaymentServiceUI } from "@shared/api/payment-categories";

export const configFlatListItems = (services: PaymentServiceUI[]): PaymentsFlatListItem[] => {
    return services.map((service) => {
        return {
            id: service.id,
            name: service.name,
            icon: service.icon
        }
    })
}