const SubmitButton = ({submitTodo}, {todos}) => {

    const handleClick = () => {
        submitTodo();
    }
    return (
        <>
        <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default SubmitButton