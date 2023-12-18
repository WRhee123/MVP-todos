import SubmitButton from './SubmitButton'
const AddTodo = ({todos, setTodos}) => {
    return (
        <>
<form>
  <div>
    <label>Add Todo</label>
    <input type='text' id='addTodo'></input>
  </div>
<SubmitButton todos={todos} setTodos={setTodos}/>
</form></>
        
    )
}

export default AddTodo