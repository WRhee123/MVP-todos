import SingleTodo from './SingleTodo'

const MyTodoList = ({todos, setTodos, getSingleTodo, edit, setEdit, editId, setEditId}) => {
return todos.map((todo) => (
    <div key={todo.id}>
        <SingleTodo todo={todo}
        todos={todos}
        setTodos={setTodos}
getSingleTodo={getSingleTodo}
edit ={edit}
setEdit={setEdit}
editId={editId} 
setEditId={setEditId}
/>
 {console.log('Todo ID:', todo.id)}
</div>
    
))
}

export default MyTodoList