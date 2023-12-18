import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const SingleTodo = ({todo, getSingleTodo}) => {
  return(
    <> <h1>{todo.todo}{todo.time_stamp}</h1>
    <EditButton todo={todo} id={todo.id} getSingleTodo={getSingleTodo}/>
    <DeleteButton todo={todo} id={todo.id} getSingleTodo={getSingleTodo}/>
    </>
   
  )
}

export default SingleTodo