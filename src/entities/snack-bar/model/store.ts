import { createEvent, createStore } from "effector";
import { SnackBarState } from "./models";

export const removeSnack = createEvent()

export const createSnack = createEvent<SnackBarState>()

export const $snackBarStore = createStore<SnackBarState[]>([])

$snackBarStore.on(removeSnack, (state) => state = state.filter((snack, index) => index != 0))

$snackBarStore.on(createSnack, (state, payload) => {
    if (state[0]?.message === payload.message) {
        state = state.filter((snack, index) => index != 0)
        return state = [payload, ...state]
    }
    return state.find((snack) => snack.message === payload.message) ? state = state : state = [...state, payload]
})

