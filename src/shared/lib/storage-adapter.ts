import { StorageAdapter } from "effector-storage"
import { MMKV } from "react-native-mmkv"

export const storage = new MMKV({
    id: "effector-storage"
})

export const storageAdapter: StorageAdapter = (key: string) => ({
    get: () => {
        const value = storage.getString(key)
        try {
            if (value) {
                return JSON.parse(value)
            }
            throw Error(`No value ${key} in storage`)
        } catch (e) {
            return undefined
        }
    },
    set: value => storage.set(key, JSON.stringify(value))
})

export const getFromStorage = (key: string) => {
    const value = storage.getString(key)
    try {
        if (value) {
            return JSON.parse(value)
        }
        throw Error(`No value ${key} in storage`)
    } catch (e) {
        return undefined
    }
}

export const saveInStorage = <T>(key: string, value: T) => {
    storage.set(key, JSON.stringify(value))
}