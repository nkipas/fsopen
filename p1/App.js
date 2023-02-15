const Header = (o) => {
    return (
        <>
        <h1>{o.p.n}</h1>
        </>
    )
}
const Content = (p) => {
    // el(warn=key): https://reactjs.org/docs/lists-and-keys.html#keys
    const c = p.p.p.map((v,i) => <p key={i}> {v.n} {v.e} </p>)
    return (
        <>
        {c}
        </>
    )
}
const Total = (p) => {
    const c = p.p.p.map(n => n.e).reduce((a, b) => a + b)
    return (
        <>
        <p>Total no of exercises: {c}</p>
        </>
    )
}

const App = () => {
    const c = {
        n: 'Half Stack app dev',
        p: [{
            n: 'Fundamentals of React',
            e: 10
        }, {
            n: 'Using props to pass data',
            e: 7
        }, {
            n: 'State of a component',
            e: 14
        }]
    }

    return (
        <>
        <Header p={c} />
        <Content p={c} />
        <Total p={c} />
        </>
    )
}

export default App
