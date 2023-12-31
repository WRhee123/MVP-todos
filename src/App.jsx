import { useState, useEffect} from 'react'
import MyTodoList from './components/MyTodoList'
import AddTodo from './components/AddTodo'
import LofiAudio from './components/LofiAudio'
import Song from './Song.mp3'
// import EditButton2 from './components/EditButton2'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [singleTodo, setSingleTodo] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState([])
  // const [loading, setLoading] = useState(true)



const getSingleTodo = async(id) => {
try {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`)
  const data = await response.json();
  setSingleTodo(data)
} catch(error) {
console.log('could not get todo')
}
}

useEffect(() => {
  const getTodos = async() => {
    try{
      const res = await fetch('http://localhost:3000/api/todos');
    const data = await res.json();
    console.log(data)
    setTodos(data)
    console.log(todos[0])
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
// if(edit === true) {
//   return(
//   <EditButton2/>
//   )
  
// }

const play = () => {
  const audio = new Audio(Song);
  audio.volume = 0.1
  audio.play()
  console.log('this song')
}

return (
  <>
  <div>
    <div className='MVPheader'>
      <h1 className='title'>MVP Todos</h1>
    </div>
    <div>
      <AddTodo todos={todos} setTodos={setTodos}/>
      </div>
    <div>
      <LofiAudio play={play}/>
    </div>
 <MyTodoList todos={todos} setTodos={setTodos} getSingleTodo={getSingleTodo} edit={edit} setEdit={setEdit} editId={editId} setEditId={setEditId}/>
 </div>
 </>

)

}



export default App
