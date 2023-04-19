const info = (...p) => {
    console.log(...p)
}

const err = (...p) => {
    console.error(...p)
}

module.exports = {
    info, err
}

