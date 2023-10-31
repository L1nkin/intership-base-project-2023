/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@ui/theme'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 16px;
`

export const ServicesListContainer = () => {
    return (
        <Wrapper>
            {/* <ServicesFlatList style={{ paddingTop: 20 }} items={services} onPress={onPress} /> */}
        </Wrapper>
    )
}
