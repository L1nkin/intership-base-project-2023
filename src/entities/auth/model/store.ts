import { confirm, login } from "@shared/api/auth/model";
import { ConfirmBody, OTPResponse } from "@shared/api/auth/types";
import { createEffect, createEvent, createStore } from "effector";

export const $phoneNumberStore = createStore('')
export const $otpStore = createStore<OTPResponse>({ otpId: '', otpCode: '', otpLen: 0 })
export const $guestTokenStore = createStore('')

export const getOtpCodeFx = createEffect(async (phone: string) => {
    const data = await login(phone)
    return data
})

export const getGuestToken = createEffect(async ({ otpId, otpCode, phone }: ConfirmBody) => {
    const data = await confirm({ otpCode, otpId, phone })
    return data.guestToken
})

export const savePhone = createEvent<string>()

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)
$phoneNumberStore.on(savePhone, (_, payload) => payload)
$guestTokenStore.on(getGuestToken.doneData, (_, payload) => payload)