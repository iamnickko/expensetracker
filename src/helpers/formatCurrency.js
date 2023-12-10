export const formatCurrency = (amount) => {
    return amount = amount.toLocaleString(undefined, {
        style: 'currency',
        currency: 'GBP'
    })
}