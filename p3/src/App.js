import { useState } from 'react'
import Note from './components/Note'

const App = ({ n }) => {
    const [m, setm] = useState(n)
    const [a, seta] = useState('')
    const [s, sets] = useState(true)

    console.log(m)
    console.log(Math.random() > 0.5)
    const add = (e) => {
        e.preventDefault()
        const o = {
            c: a,
            p: Math.random() > 0.5,
            id: m.length + 1,
        }
        setm(m.concat(o))
        seta('')
    }
    const ha = (e) => seta(e.target.value)
    const nts = s ? m : m.filter(n => n.p)

    const t = () => { sets(!s) }
    return (
        <>
        <h1>Notes</h1>
        <ul>
            <Note n={nts} />
        </ul>
        <button onClick={() => sets(!s)}>Show: {s ? 'all' : 'important'}</button>
        <form onSubmit={add}>
            <input value={a} onChange={ha} />
            <button type="submit">Save</button>
        </form>
        </>
    )
}

export default App
