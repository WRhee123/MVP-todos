import SingleTodo from './SingleTodo'

const MyTodoList = ({todos, setTodos, getSingleTodo}) => {
return todos.map((todo) => (
    <div key={todo.id}>
        <SingleTodo todo={todo}
        todos={todos}
        setTodos={setTodos}
getSingleTodo={getSingleTodo}
/>
 {console.log('Todo ID:', todo.id)}
</div>
    
))
}

export default MyTodoList