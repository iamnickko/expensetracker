export const formatDate = (epoch) => {
    const date = new Date(epoch).toLocaleDateString('en-GB')
    return date
}