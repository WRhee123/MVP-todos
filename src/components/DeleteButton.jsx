
const DeleteButton = ({todo, todos, setTodos, id, getSingleTodo}) => {

    const handleDelete = async() => {
        try{
            const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type" : 'application/json'
                    
                },
                body:JSON.stringify({
                    id: id
                }),
            });
            if(response.ok) {
                const resData = await response.json();
                const todoName = resData.todo
                alert(`${todoName} was deleted`)
                console.log('todo deleted', resData)
            } else {
                console.log('failed to delete todo')
            }
            setTodos(todos.filter((todo) => todo.id !== id));
        }catch(error) {
            console.log(error)
        }
    }

return(
    <button className='deletebutton' onClick={handleDelete} id={id}>Delete</button>
)
}

export default DeleteButton