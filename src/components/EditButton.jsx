import EditButton2 from "./EditButton2"

const EditButton = ({todo, todos, setTodos, id, getSingleTodo, edit, setEdit, editId, setEditId}) => {
// const [edit, setEdit] = useState(false)


   const handleClick = (e) => {
    setEdit(true)
    setEditId(id)
console.log(e.currentTarget.id)
   }
//need to add a conditional check for if edit === true and id matches return a EditButton2 component for just that id
//used a ternary operator here for conditional check
return (
    <div>
        <button onClick={handleClick} id={id}>
            Edit
            </button>
    {edit && editId === id ? <EditButton2 todo={todo} id={id} /> : null}
    </div>
)
}

export default EditButton