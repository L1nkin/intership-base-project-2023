/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { styled } from '@ui/theme'
import { PaymentsStackParamList } from '@app/app-navigation/Screens/types'
import { CategoriesFlatList } from '@features/categories-list'
import { Category, Service, SimpleModel } from '@shared/api/types'
import { getCategories } from '@shared/api'

const Wrapper = styled.SafeAreaView`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 18px;
`

const CategoriesFlatListWrapper = styled(CategoriesFlatList)`
    top: 20px;
`

type Props = {
    navigateTo(screenName: keyof PaymentsStackParamList, title?: string, services?: Service[]): void
}

export const PaymentsListContainer = ({ navigateTo }: Props) => {
    const [categories, setCategories] = useState<Category[]>([])

    const categoriesModel = useMemo(() => {
        return categories.map(({ category_id, category_name, category_icon }) => {
            const simpleModel: SimpleModel = {
                id: category_id,
                name: category_name,
                icon: category_icon
            }
            return simpleModel
        }
        )
    }, [categories])

    useEffect(() => {
        (async () => {
            try {
                const data = await getCategories()
                setCategories(data)
            } catch (error) {
                console.warn(error)
            }
        })()
    }, [])

    const onPress = useCallback((id: string) => {
        const selectedCategory = categories.find((category) => category.category_id === id)
        switch (id) {
            case '1':
                navigateTo('MobileNetwork', selectedCategory?.category_name, selectedCategory?.services)
                break;
            case '2':
                navigateTo('HousingCommunalService')
                break;
            case '3':
                navigateTo('Internet')
                break;
            default:
                console.log('Что-то не так')

        }
    }, [categories, navigateTo])

    return (
        <Wrapper>
            <CategoriesFlatListWrapper items={categoriesModel} onPress={onPress} />
        </Wrapper>
    )
}
