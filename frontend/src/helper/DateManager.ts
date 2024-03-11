const getFormattedDate = function(rawDate: string) {
    const date: Date = new Date(rawDate)
    return date.toDateString() + ", " + date.toLocaleTimeString()
}

export {
    getFormattedDate
}