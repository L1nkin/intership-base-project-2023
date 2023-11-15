import { styled } from '@shared/ui/theme';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Typography } from '@shared/ui/atoms';
import { calculateEndTimer, calculateTimeLeft, convertSeconds } from '../lib';

const TimerWrapper = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TimerLabel = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
`

type Props = {
    onKeyPress: () => void
}

const TouchWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`

export type TimerInfo = {
    minutes: number
    seconds: number
}

const timerInitial: TimerInfo = { minutes: 3, seconds: 0 }

export const TimerView = ({ onKeyPress }: Props) => {
    const [isEnded, setIsEnded] = useState(false)
    const [timeLeft, setTimeLeft] = useState<TimerInfo>(timerInitial)
    const timeEnd = useRef(calculateEndTimer())

    useEffect(() => {
        const difference = timeEnd.current - Date.now()
        const timeout = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(difference))
        }, 1000)
        if (difference <= 0) {
            clearTimeout(timeout)
            setIsEnded(true)
        }
        return () => clearTimeout(timeout)
    }, [timeLeft])

    const onPress = useCallback(() => {
        setTimeLeft(timerInitial)
        setIsEnded(false)
        timeEnd.current = calculateEndTimer()
        onKeyPress()
    }, [onKeyPress])

    return (
        <TimerWrapper>
            {
                isEnded
                    ? <TouchWrapper activeOpacity={0.7} onPress={onPress}><Typography variant="caption1" align="center">Выслать код повторно</Typography></TouchWrapper>
                    : <TimerLabel variant="caption1" align="center">Повторить через {timeLeft.minutes}:{convertSeconds(timeLeft.seconds)}</TimerLabel>
            }
        </TimerWrapper>
    )
}