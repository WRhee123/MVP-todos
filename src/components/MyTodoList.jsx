import SingleTodo from './SingleTodo'

const MyTodoList = ({todos, getSingleTodo}) => {
return todos.map((todo) => (
    <div key={todo.id}>
        <SingleTodo todo={todo}
getSingleTodo={getSingleTodo}
/>
 {console.log('Todo ID:', todo.id)}
</div>
    
))
}

export default MyTodoList