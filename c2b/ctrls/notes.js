const r = require('express').Router()
const Note = require('../models/note')

r.get('/', (q, s) => {
    Note.find({}).then(ns => {
        s.json(ns)
    })
})

r.get('/:id', (q, s, n) => {
    Note.findById(q.params.id).then(n => {
        if (n)
            s.json(n)
        else
            s.status(404).end()
    }).catch(n)
})

r.post('/', (q, s, n) => {
    console.log('body',q.body)
    const note = new Note({
        content: q.body.content,
        important: q.body.important || false,
    })
    note.save().then(n => {
        s.json(n)
    }).catch(n)
})

r.delete('/:id', (q, s, n) => {
    Note.findByIdAndRemove(q.params.id).then(() => {
        s.status(204).end()
    }).catch(n)
})

r.put('/:id', (q, s, n) => {
    const note = {
        content: q.body.content,
        important: q.body.important,
    }
    Note.findByIdAndUpdate(q.params.id, note, { new: true }).then(n => {
        s.json(n)
    }).catch(n)
})

module.exports = r
