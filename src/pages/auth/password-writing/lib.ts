export const isValidPassword = (password: string): boolean => {
    const passwordRegEx = RegExp('^([0-9A-Za-z]{5,255})$')
    return passwordRegEx.test(password)
}