import { useTheme } from "@shared/hooks";
import { Typography } from "@shared/ui/atoms";
import { IconClose } from "@shared/ui/icons";
import { styled } from "@shared/ui/theme";
import { useStore } from "effector-react";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { $snackBarStore, removeSnack } from "../model/store";

const SnackView = styled.View`
    padding: 20px;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 8px;
    right: 8px;
    top: 30px;
    background-color: ${({ theme }) => theme.palette.indicator.error};
`

const PressedCloseIcon = styled.TouchableOpacity`
    display: flex;
    align-content: center;
    justify-content: center;
`

const MessageTextView = styled.View`
    flex:1;
`

export const SnackBar = () => {
    const snackBarStore = useStore($snackBarStore)
    const [isVisible, setIsVisible] = useState(false);
    const handleTimeout = useRef<NodeJS.Timeout>()
    const theme = useTheme()



    useEffect(() => {
        clearTimeout(handleTimeout.current)
        if (snackBarStore.length != 0) {
            setIsVisible(true)
            const snackbar = snackBarStore[0]
            const timeout = setTimeout(() => {
                removeSnack()
            }, snackbar.duration);
            handleTimeout.current = timeout
        } else {
            setIsVisible(false)
        }
    }, [snackBarStore]);

    const pressedClose = useCallback(() => {
        removeSnack()
    }, [])

    return isVisible ? (
        <SnackView>
            <MessageTextView>
                <Typography variant="body15Regular">{snackBarStore[0]?.message}</Typography>
            </MessageTextView>
            <PressedCloseIcon activeOpacity={0.7} onPress={pressedClose}>
                <IconClose color={theme.palette.text.primary} />
            </PressedCloseIcon>
        </SnackView>
    ) : null;
};
