import { confirm, enter, login } from "@shared/api/auth/model";
import { ConfirmBody, EnterBody, EnterResponse, OTPResponse } from "@shared/api/auth/types";
import { storageAdapter } from "@shared/lib/storage-adapter";
import { createEffect, createEvent, createStore } from "effector";
import { persist } from "effector-storage";

export const $phoneNumberStore = createStore('')
export const $otpStore = createStore<OTPResponse>({ otpId: '', otpCode: '', otpLen: 0 })
export const $guestTokenStore = createStore('')
export const $tokensStore = createStore<EnterResponse>({ accessToken: '', refreshToken: '' })

export const getOtpCodeFx = createEffect(async (phone: string) => {
    const data = await login(phone)
    return data
})

export const getGuestToken = createEffect(async ({ otpId, otpCode, phone }: ConfirmBody) => {
    const data = await confirm({ otpCode, otpId, phone })
    return data.guestToken
})

export const getTokensFx = createEffect(async ({ guestToken, password }: EnterBody) => {
    const data = await enter({ guestToken, password })
    return data
})

export const savePhone = createEvent<string>()

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)
$phoneNumberStore.on(savePhone, (_, payload) => payload)
$guestTokenStore.on(getGuestToken.doneData, (_, payload) => payload)
$tokensStore.on(getTokensFx.doneData, (_, payload) => payload)

persist({
    store: $tokensStore,
    key: 'tokens',
    adapter: storageAdapter
})

persist({
    store: $guestTokenStore,
    key: 'questToken',
    adapter: storageAdapter,
})

