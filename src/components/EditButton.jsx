import EditButton2 from "./EditButton2"

const EditButton = ({todo, todos, setTodos, id, getSingleTodo, edit, setEdit}) => {
// const [edit, setEdit] = useState(false)


   const handleClick = (e) => {
    setEdit(true)
    console.log(e.target.id)
    return(<EditButton2 todo={todo} id={id}/>)
   
   }


   

return (
    <button onClick={handleClick} id={id}>Edit</button>
   
)
}

export default EditButton