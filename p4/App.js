import { useState} from 'react'

const App = () => {
    const [n, setn] = useState('')
    const [no, setno] = useState('')
    const [o, seto] = useState([{ n: "Arto Hellas", no: "044 123", }])

    const hn = (e) => {
        setn(e.target.value)
    }
    const hno = (e) => { setno(e.target.value) }
    const add = (e) => {
        e.preventDefault()
        
        const a = {
            n: n,
            no: no,
        }
        seto(o.concat(a))
        setn('')
        setno('')
    }
    return (
        <>
        <h2>Phonebook</h2>
        <form onSubmit={add}>
        <div>
            Name: <input value={n} onChange={hn} />
        </div>
        <div>
            Number: <input value={no} onChange={hno} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
        <h2>Numbers</h2>
        <ul>
            {o.map((o,i) => <li key={i}>{o.n} {o.no}</li>)}
        </ul>
        </>
    )
}

export default App
