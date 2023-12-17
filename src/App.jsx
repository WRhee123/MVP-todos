import { useState, useEffect} from 'react'
import MyTodoList from './components/MyTodoList'
import SubmitButton from './components/SubmitButton'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const getTodos = async() => {
    const res = await fetch('./api/todos');
    const data = await res.json();
    console.log(data)
    setTodos(data)
    setLoading(false)
  };
 getTodos();
}, []);

// if(loading) {
//   return(
//     <div>
//       <Loading/>
//     </div>
//   )
// }

// if(!loading) {
//   return (
//     <div>
//       <Todos todos={todos}/>
//       </div>
//   )
  
// }

return (
  <> 
  <form>
  <div>
    <label>Add Todo</label>
    <input type='text' id='addTodo'></input>
  </div>
<SubmitButton todos={todos} setTodos={setTodos}/>
<MyTodoList todos={todos}/>
 </form>
 </>

)

}



export default App
