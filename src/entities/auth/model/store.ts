import { login } from "@shared/api/auth/model";
import { OTPResponse } from "@shared/api/auth/types";
import { createEffect, createEvent, createStore } from "effector";

export const $phoneNumberStore = createStore('')
export const $otpStore = createStore<OTPResponse>({ otpId: '', otpCode: '', otpLen: 0 })


export const getOtpCodeFx = createEffect(async (phone: string) => {
    const data = await login(phone)
    return data
})

export const savePhone = createEvent<string>()

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)
$phoneNumberStore.on(savePhone, (_, payload) => payload)


