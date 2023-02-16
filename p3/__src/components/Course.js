const Course = ({ c }) => {
    console.log(c.parts)
    const no = c.parts.map(e => e.exercises).reduce((a,b) => a+b);
    console.log(p)
    return (
        <>
        
        </> 
    )
}

export default Course
