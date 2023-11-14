import { login } from "@shared/api/auth/model";
import { createEffect, createEvent, createStore } from "effector";

export const $phoneNumberStore = createStore('')
export const $otpStore = createStore('')

export const getOtpCodeFx = createEffect(async (phone: string) => {
    const data = await login(phone)
    return data.otpCode
})

export const savePhone = createEvent<string>()

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)
$phoneNumberStore.on(savePhone, (_, payload) => payload)