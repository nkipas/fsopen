const { info, err } = require('./logger')

const qlogger = (q, s, n) => {
    info('Method:', q.method)
    info('Path:', q.path)
    info('Body:', q.body)
    info('---')
    n()
}

const unknownEP = (q, s) => {
    s.status(404).send({ error: 'unknown endpoint' })
}

const ehandler = (e, q, s, n) => {
    err(e.message)

    if (e.name === 'CastError')
        s.status(400).send({ error: 'malformed id' })
    else if (e.name === 'ValidationError')
        s.status(400).json({ error: e.message })
    
    n(e)
}

module.exports = {
    qlogger,
    unknownEP,
    ehandler
}


