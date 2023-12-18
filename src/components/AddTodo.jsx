import SubmitButton from './SubmitButton'
const AddTodo = ({todos, setTodos}) => {
    
  const submitTodo = async(e) => {
    // e.preventDefault()
    try {
      // const inputValue = document.querySelector('#addTodo')
      const newTodo = document.querySelector('#addTodo').value
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        body: JSON.stringify({
          todo: newTodo
        }), headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
      if(response.ok) {
        let resData = await response.json();
        //when the line below was added functionality did not change
        setTodos([...todos, resData]);
        console.log('todo was added', resData); 
      } else {
        console.log('failed to add todo')
      }
    }catch(error) {
      console.log(error.stack)
    }
  }

  
  
  return (
        <>
<form>
  <div>
    <label>Add Todo</label>
    <input type='text' id='addTodo'></input>
  </div>
<SubmitButton submitTodo={submitTodo} todos={todos}/>
</form></>
        
    )
}

export default AddTodo