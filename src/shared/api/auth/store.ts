import { storageAdapter } from "@shared/lib"
import { createStore, createEffect, createEvent } from "effector"
import { persist } from "effector-storage"
import { confirm, enter } from "./model"
import { ConfirmBody, EnterBody } from "./types"

export const $guestTokenStore = createStore('')
export const $refreshToken = createStore('')
export const $accessToken = createStore('')
export const $authStorage = createStore(false)

export const setAuth = createEvent<boolean>()

export const getGuestTokenFx = createEffect(async ({ otpId, otpCode, phone }: ConfirmBody) => {
    const data = await confirm({ otpCode, otpId, phone })
    return data.guestToken
})

export const getTokensFx = createEffect(async ({ guestToken, password }: EnterBody) => {
    const data = await enter({ guestToken, password })
    return data
})

$guestTokenStore.on(getGuestTokenFx.doneData, (_, payload) => payload)
$refreshToken.on(getTokensFx.doneData, (_, payload) => payload.refreshToken)
$accessToken.on(getTokensFx.doneData, (_, payload) => payload.accessToken)
$authStorage.on(setAuth, (_, payload) => payload)

persist({
    store: $refreshToken,
    key: 'refreshToken',
    adapter: storageAdapter
})

persist({
    store: $accessToken,
    key: 'accessToken',
    adapter: storageAdapter
})

persist({
    store: $guestTokenStore,
    key: 'questToken',
    adapter: storageAdapter,
})