import { createSnack } from "@entities/snack-bar";
import { login } from "@shared/api/auth/model";
import { createEffect, createStore } from "effector";

export const $otpStore = createStore('')

export const getOtpCodeFx = createEffect(async (phone: string) => {
    try {
        const data = await login(phone)
        return data.otpCode
    } catch (error) {
        createSnack({ message: 'Что-то пошло не так', duration: 3000 })
        return
    }
})

$otpStore.on(getOtpCodeFx.doneData, (state, payload) => payload)