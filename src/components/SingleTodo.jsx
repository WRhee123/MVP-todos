import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const SingleTodo = ({todo, todos, setTodos, getSingleTodo, edit, setEdit, editId, setEditId}) => {
    const formattedDate = new Date(todo.time_stamp).toLocaleString();
  return(
    <div className='singleTodo' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
          <h1 style={{ marginLeft: '30px' }}>{todo.todo}</h1>
      <span style={{ marginLeft: '30px'}}>{formattedDate}</span>
      </div>
    <div style={{ display: 'flex', marginRight: '30px' }}>
      <EditButton todo={todo} todos={todos} setTodos={setTodos} id={todo.id} getSingleTodo={getSingleTodo} edit={edit} setEdit={setEdit} editId={editId} setEditId={setEditId} />
      <DeleteButton todo={todo} todos={todos} setTodos={setTodos} id={todo.id} getSingleTodo={getSingleTodo} />
    </div>
    </div>
   
  )
}

export default SingleTodo