import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteServ from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setError] = useState(null)

    useEffect(() => {
        noteServ
          .getAll()
          .then(initialNotes => {
              setNotes(initialNotes)
          })
    }, [])

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
        }

        noteServ
          .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
            setNewNote('')
            })
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(n => n.important)

    const toggleImportance = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteServ
            .update(id, changedNote).then(returnedNote => {
                setNotes(notes.map(n => n.id !== id ? n : returnedNote))
            })
            .catch(e => {
                setError( `Note '${note.content}' was already removed from server`)
                setTimeout(() => { setError(null) }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <>
        <h1>Notes app</h1>
        <Notification message={errorMessage} />
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all' }
            </button>
        </div>
        <ul>
            <ul>
            {notesToShow.map(n =>
                <Note key={n.id}
                    note={n}
                    toggleImportance={() => toggleImportance(n.id)}
                />
            )}
            </ul>
        </ul>
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange} />
            <button type="submit">save</button>
        </form>
        <Footer />
        </>
    )
}

export default App
