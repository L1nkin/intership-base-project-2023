import { TimerInfo } from "./types";

export const calculateTimeLeft = (difference: number): TimerInfo => {
    let timeLeft: TimerInfo = { minutes: 0, seconds: 0 }
    if (difference > 0) {
        timeLeft = {
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

export const convertSeconds = (seconds: number): string => {
    return seconds >= 10 ? `${seconds}` : `0${seconds}`
}

export const calculateEndTimer = (): number => {
    return Date.now() + (1000 * 3 * 60)
}