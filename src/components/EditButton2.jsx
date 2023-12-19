import {useState} from 'react'
const EditButton2 = ({ todo, todos, setTodos, id, edit, setEdit }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleEdit = async (e) => {
      if (e.key === 'Enter') {
        const newTodo = { ...todo, todo: inputValue }; // Create a new todo with the updated text
        try {
          let response = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              todo: inputValue,
            }),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
          });
  
          if (response.ok) {
            let resData = await response.json();
            console.log('Todo was edited', resData);
            alert(`Edited todo to '${resData.todo}'`);
  
            // Update the state with the modified todos array
            setTodos((prevTodos) =>
              prevTodos.map((todo) => (todo.id === id ? newTodo : todo))
            );
  
            setEdit(false)
            setInputValue('');
          } else {
            console.log('Failed to edit todo');
            alert('Failed to edit todo');
          }
        } catch (error) {
          console.log(error.stack);
        }
      }
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleEdit}
          type="text"
          placeholder="Edit todo here"
          id="editTodo"
        />
      </div>
    );
  };
  
  export default EditButton2;