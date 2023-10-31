import React from 'react'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Service } from '@shared/api/types'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`

type Props = {
    service: Service
}

export const PaymentContainer = ({ service }: Props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    return (
        <Wrapper>
            <Typography variant="largeTitle">{service.service_name}</Typography>
        </Wrapper>
    )
}
