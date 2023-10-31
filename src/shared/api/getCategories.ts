import axios from "axios"

import { Category } from "./types"

export const getCategories = async (): Promise<Category[]> => {
    const response = await axios.get('https://github.com/kode-frontend/files/raw/main/categories.json')
    return response.data.category
}