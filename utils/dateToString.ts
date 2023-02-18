const dateToString = (date: string) => {
    const data = new Date(date)
    const response = data.toLocaleDateString().split(', ').join(' ')
    return response !== 'Invalid Date' ? response : null
}

export default dateToString