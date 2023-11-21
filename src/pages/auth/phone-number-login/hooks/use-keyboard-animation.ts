import { useKeyboardShowing } from "@shared/hooks";
import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export const useKeyboardAnimation = (isFocus: boolean) => {
    const phoneView = useSharedValue(0)
    const { showingKeyboardStyle } = useKeyboardShowing(isFocus)

    const translatePhoneViewStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -phoneView.value }],
        }
    })

    useEffect(() => {
        if (isFocus) {
            phoneView.value = withTiming(50)
            return
        }
        phoneView.value = withTiming(0)
    }, [isFocus, phoneView])

    return { showingKeyboardStyle, translatePhoneViewStyle }
}