const rublesSymbol = '₽'

export const configRublesString = (value: number): string => {
    return `${value}` + rublesSymbol
}

export const convertToNumber = (value: string): number => {
    return Number(value.replace(/[^0-9.,]/g, ''))
}

