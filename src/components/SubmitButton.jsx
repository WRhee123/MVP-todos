const SubmitButton = ({submitTodo}, {todos}) => {

    const handleClick = () => {
        submitTodo();
    }
    return (
        <>
        <button className='submitbutton' onClick={handleClick}>Submit</button>
        </>
    )
}

export default SubmitButton