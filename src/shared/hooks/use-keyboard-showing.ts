import { useEffect } from "react";
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const KEYBOARD_HEIGHT = 280

export const useKeyboardShowing = (isShowing: boolean) => {
    const animationShared = useSharedValue(0)

    const showingKeyboardStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: animationShared.value }],
        };
    });

    useEffect(() => {
        if (isShowing) {
            animationShared.value = withTiming(-KEYBOARD_HEIGHT)
            return
        }
        animationShared.value = withTiming(0)
    }, [animationShared, isShowing])

    return { showingKeyboardStyle, KEYBOARD_HEIGHT }
}