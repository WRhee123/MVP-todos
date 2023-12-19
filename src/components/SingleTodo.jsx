import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const SingleTodo = ({todo, todos, setTodos, getSingleTodo, edit, setEdit, editId, setEditId}) => {
    const formattedDate = new Date(todo.time_stamp).toLocaleString();
  return(
    <div className='singleTodo'> 
    <h1>{todo.todo}</h1>
    <h4>{formattedDate}</h4>
    <EditButton todo={todo} todos={todos} setTodos={setTodos} id={todo.id} getSingleTodo={getSingleTodo} edit={edit} setEdit={setEdit} editId={editId} setEditId={setEditId}/>
    <DeleteButton todo={todo} todos={todos} setTodos={setTodos} id={todo.id} getSingleTodo={getSingleTodo}/>
    </div>
   
  )
}

export default SingleTodo