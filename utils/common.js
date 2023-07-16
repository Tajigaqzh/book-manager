function notExist(a) {
    return a === undefined || a === null || a === ""
}

function notNullArray(a) {
    return Array.isArray(a) && a.length > 0
}

module.exports = {
    notExist,
    notNullArray
}