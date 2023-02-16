const Note = ({ n }) => (
        n.map(n => <li key={n.id}> {n.c} </li>)
)

export default Note
