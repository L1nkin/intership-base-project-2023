export const convertToNumber = (value: string): number => {
    const result = Number(value.replace(/[^0-9.,]/g, ''))

    if (isNaN(result)) {
        return 0;
    }

    return result
}

