export type Service = {
    service_id: string
    service_name: string
    service_icon: string
}

export type Category = {
    category_id: string
    category_name: string
    category_icon: string
    services: Service[]
}