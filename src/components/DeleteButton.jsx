const DeleteButton = ({todo, id, getSingleTodo}) => {

    const handleClick = (e) => {
        console.log(e.target.id)
    }

return(
    <button onClick={handleClick}>Delete</button>
)
}

export default DeleteButton