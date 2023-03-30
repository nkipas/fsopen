const express = require('express')
const app = express()
const cors = require('cors')

const rl = (q, s, n) => {
    console.log('Method: ', q.method)
    console.log('Path:   ', q.path)
    console.log('Body:   ', q.body)
    console.log('---')
    n()
}

const unknownEP = (q, s) => {
    s.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(rl)
app.use(express.static('build'))

let notes = [
    {
        id: 1,
        content: "Foo Bar",
        important: true
    },
    {
        id: 2,
        content: "Bar Baz",
        important: false
    },
    {
        id: 3,
        content: "Baz Quux",
        important: true
    }
]

app.get('/', (q, s) => {
    s.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (q, s) => {
    s.json(notes)
})

const getrev = () => {
    let m = Math.max(...notes.map(n => n.id))
    if (m < notes.length)
        m = notes.length
    else m = m + 1
    return m
}

app.post('/api/notes', (q, s) => {
    const b = q.body

    if (!b.content)
        return s.status(400).json({
            error: 'content missing'
        })
    const n = {
        content: b.content,
        important: b.important || false,
        date: new Date(),
        id: getrev(),
    }

    notes = notes.concat(n)

    s.json(n)
})

app.get('/api/notes/:id', (q, s) => {
    const id = Number(q.params.id)
    const n = notes.find(n => n.id === id)

    if (n)
        s.json(n)
    else
        s.status(404).end()
    
    s.json(n)
})

app.delete('/api/notes/:id', (q, s) => {
    const id = Number(q.params.id)
    notes = notes.filter(n => n.id !== id)

    s.status(204).end()
})

app.use(unknownEP)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



