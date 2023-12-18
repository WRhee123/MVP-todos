import { useState, useEffect} from 'react'
import MyTodoList from './components/MyTodoList'
import AddTodo from './components/AddTodo'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [singleTodo, getSingleTodo] = useState([])
  // const [loading, setLoading] = useState(true)

useEffect(() => {
  const getTodos = async() => {
    try{
      const res = await fetch('http://localhost:3000/api/todos');
    const data = await res.json();
    console.log(data)
    setTodos(data)
    console.log(todos)
  }catch(error) {
    console.log(error)
    }
  };
 getTodos();
}, []);

useEffect(() => {
  console.log('Updated todos:', todos);
}, [todos]); // Log the updated todos whenever the todos state changes

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
 <AddTodo todos={todos} setTodos={setTodos}/>
 <MyTodoList todos={todos} getSingleTodo={getSingleTodo}/>
 </>

)

}



export default App
