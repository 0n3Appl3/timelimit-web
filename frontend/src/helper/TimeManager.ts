const getTime = function(seconds: number) {
    const minutes: number = getMinutes(seconds)
    seconds = Number(getModSeconds(seconds))
    const minSuffix: string = minutes !== 1 ? " minutes" : " minute"
    const secSuffix: string = seconds !== 1 ? " seconds" : " second"

    if (minutes == 0) {
        return seconds + secSuffix
    }
    if (seconds == 0) {
        return minutes + minSuffix
    }
    return minutes + minSuffix + ", " + seconds + secSuffix
}

const getShortTime = function(seconds: number) {
    return getMinutes(seconds) + ":" + getModSeconds(seconds)
}

const getMinutes = function(seconds: number) {
    return Math.floor(seconds / 60)
}

const getModSeconds = function(seconds: number) {
    seconds = seconds % 60
    return (seconds < 10 ? "0" + seconds : seconds)
}

export {
    getTime,
    getShortTime
}