import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated"



export const useKeyboardAnimation = () => {
    const keyboard = useAnimatedKeyboard()

    const translateButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -keyboard.height.value }],
        };
    });
    const translatePhoneViewStyle = useAnimatedStyle(() => {
        let translateY = 0
        if (keyboard.state.value === 1 || keyboard.state.value === 2) translateY = -50

        return {
            transform: [{ translateY: translateY }],
        }
    })

    return { translateButtonStyle, translatePhoneViewStyle }
}