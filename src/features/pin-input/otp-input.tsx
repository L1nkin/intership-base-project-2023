import { Input, Typography } from '@shared/ui/atoms';
import { styled } from '@shared/ui/theme';
import React, { useCallback } from 'react';

const OTPInputContainer = styled.View`
 justify-content: center;
 align-items: center;
`;

const BoxWithSeparateView = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`

const TextInputHidden = styled(Input)`
 position: absolute;
 opacity: 0;
`;

const SplitOTPBoxesContainer = styled.Pressable`
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 gap: 8px;
`;

const SplitBoxes = styled.View`
 background-color: ${({ theme }) => theme.palette.content.secondary};
 border-width: 0px;
 border-radius: 12px;
 padding: 12px;
 width: 40px;
 height: 48px;
`;

const SplitBoxText = styled.Text<{
    isValid: boolean
}>`
 font-size: 20px;
 text-align: center;
 color: ${({ theme, isValid }) => isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`;

const FocusedLine = styled.View`
    height: 2px;
    border-radius: 1px;
    margin-top: 6px;
    background-color: ${({ theme }) => theme.palette.accent.primary};
`

const SeparateLine = styled(Typography) <{
    isValid: boolean
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme, isValid }) => isValid ? theme.palette.text.secondary : theme.palette.indicator.error};
`

type Props = {
    code: string
    isValid: boolean
    setCode: (code: string) => void
    maximumLength: number
}

export const OTPInput = ({ code, isValid, maximumLength, setCode }: Props) => {
    const boxArray = new Array(maximumLength).fill(0);

    const boxDigit = useCallback((_: number, index: number) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        return (
            <BoxWithSeparateView key={index}>
                {index === 2 ? <SeparateLine isValid={isValid} variant="largeTitle">-</SeparateLine> : undefined}
                <SplitBoxes >
                    <SplitBoxText isValid={isValid}>{digit}</SplitBoxText>
                    {isValueFocused && !isCodeComplete ? <FocusedLine /> : undefined}
                </SplitBoxes>
            </BoxWithSeparateView>
        );
    }, [code, isValid, maximumLength]);

    return (
        <OTPInputContainer>
            <SplitOTPBoxesContainer>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
            <TextInputHidden value={code} onChangeText={setCode} keyboardType="number-pad" maxLength={maximumLength} />
        </OTPInputContainer>
    )
}