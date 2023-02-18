const dateToString = (date: string | undefined) => {
    if (date) {
        const data = new Date(date)
        const response = data.toLocaleDateString().split(', ').join(' ')
        return response !== 'Invalid Date' ? response : null
    }
    return
}

export default dateToString