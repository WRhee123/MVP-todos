import SubmitButton from './SubmitButton'
import LofiAudio from './LofiAudio'
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
        //spread operator creates a copy of the existing todos array and ensure the original array is not modified.
        //it concatenates the elements of the existing todos array with the resData
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
    <label style={{fontSize: '30px'}}>Add Todo</label>
    <input type='text' id='addTodo' className='addTodoInput' placeholder='Type todo here'></input>
  </div>
<SubmitButton submitTodo={submitTodo} todos={todos}/>
</form></>
        
    )
}

export default AddTodo