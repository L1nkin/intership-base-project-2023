
export type TKeyboardButtonType = 'number' | 'remove' | 'view'
export type TKeyButtonPressed = (type: TKeyboardButtonType, value?: number) => void

export type TKeyboardButton = {
    type: TKeyboardButtonType
    value?: number
}