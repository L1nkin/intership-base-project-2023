import { IconLoader } from '@shared/ui/icons'
import { TBaseIconProps } from '@shared/ui/icons/types'
import React, { useEffect } from 'react'
import { StyleProp, ViewProps } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

type Props = {
    iconProps?: TBaseIconProps
    style?: StyleProp<ViewProps>
}

export const Loader = ({ iconProps, style }: Props) => {
    const spin = useSharedValue(0);

    useEffect(() => {
        spin.value = withRepeat(withTiming(360, { duration: 600 }), 0);
    });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${spin.value}deg`,
                },
            ],
        };
    });

    return (
        <Animated.View style={[style, animatedStyles]}>
            <IconLoader size={iconProps?.size} color={iconProps?.color} />
        </Animated.View>
    )
}