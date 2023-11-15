import { Typography } from '@shared/ui/atoms';
import { IconErrorFile } from '@shared/ui/icons';
import { PrimaryButton } from '@shared/ui/molecules';
import { styled } from '@shared/ui/theme';
import React from 'react';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.View`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 40px;
    top: -40px;
`

const RetryButton = styled(PrimaryButton)`
    position: absolute;
    bottom: 20px;
    left: 16px;
    right: 16px;
`

type Props = {
    goBack: () => void
}

export const ErrorServer = ({ goBack }: Props) => {
    return (
        <Wrapper>
            <Content>
                <IconErrorFile />
                <Typography variant='subtitle'>Внимание</Typography>
                <Typography variant='body15Regular' align='center'>Сервер временно недоступен. Пожалуйста, повторите попытку позднее</Typography>
            </Content>
            <RetryButton onPress={goBack}>Повторить</RetryButton>
        </Wrapper>
    )
}