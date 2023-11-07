import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import React from 'react'

const Wrapper = styled.View`
    flex:1;
    display: flex;
    justify-content: center;
    align-content: center;
`

const EmptyListStub = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
`

export const ListEmptyComponent = () => {
    return (
        <Wrapper>
            <EmptyListStub variant="body15Regular" align="center">По вашему запросу ничего не найдено</EmptyListStub>
        </Wrapper>
    )
}
