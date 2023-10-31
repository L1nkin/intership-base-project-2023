import { PaymentsFlatListItem } from "@features/categories-list/types";
import { PaymentCategoryUI } from "@shared/api/payment-categories";

export const configFlatListItems = (categories: PaymentCategoryUI[]): PaymentsFlatListItem[] => {
    return categories.map((category) => {
        return {
            id: category.id,
            name: category.name,
            icon: category.icon
        }
    })
}