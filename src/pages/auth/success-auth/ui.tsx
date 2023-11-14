import { Typography } from '@shared/ui/atoms';
import { IconSuccessAuth } from '@shared/ui/icons';
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
    navigateToNext: () => void
}

export const SuccessAuth = ({ navigateToNext }: Props) => {
    return (
        <Wrapper>
            <Content>
                <IconSuccessAuth />
                <Typography variant='subtitle'>Все готово</Typography>
                <Typography variant='body15Regular' align='center'>Теперь вы можете использовать мобильное приложение Kode bank</Typography>
            </Content>
            <RetryButton onPress={navigateToNext}>Продолжить</RetryButton>
        </Wrapper>
    )
}