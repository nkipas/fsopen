import { useState } from 'react';

const Header =  "Welcome to Unicafe!"

const Stats = ({p,r}) => {
    if (p.i === 0) {
       
        return ( <> </> )
    }
    let avg = p.s / p.i
    let pos = r.filter(a => a > 0).length
    let neu = r.filter(a => a === 0).length
    let neg = r.filter(a => a < 0).length
    return (
        <>
        <table>
        <tr>
            <td>Positive reviews:</td><td>{pos}</td>
        </tr><tr>
            <td>Neutral reviews:</td><td>{neu}</td>
        </tr><tr>
            <td>Negative reviews:</td><td>{neg}</td>
        </tr><tr>
            <td>Average:</td><td>{avg}</td>
        </tr><tr>
            <td>Pos %:</td><td>{pos/r.length}</td>
        </tr>
        </table>
        </>
    )

}
const Btn = ({a, t}) => {
    return (
        <button onClick={a}>
            {t}
        </button>
    )
}

const App = () => {
    const [r, setr] = useState([])
    const [m, setm] = useState({
        s: 0, i: 0
    })

    const hm = (v) => () => {
        let n = { ...v }
        n = { s: v + m.s, i: m.i + 1 }
        setm(n)
        setr(r.concat(v))
    }
    
    return (
        <>
        {Header}
        <br /><br />
        <Btn a={hm(1)} t="Positive" />
        <Btn a={hm(0)} t="Neutral" />
        <Btn a={hm(-1)} t="Negative" />
        <br />
        <Stats p={m} r={r} />
        
        <p>Button press history: {r.join(' ')}</p>
        </>
    )
}

export default App
