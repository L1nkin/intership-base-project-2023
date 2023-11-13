import { login } from "@shared/api/auth/model";
import { createEffect, createStore } from "effector";

export const $otpStore = createStore('')

export const getOtpCodeFx = createEffect(async (phone: string) => {
    const data = await login(phone)
    return data.otpCode
})

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)