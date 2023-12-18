const EditButton2 = ({todo, id}) => {
  
 const handleEdit = async() => {
    const inputValue = document.querySelector('#editTodo').value
        try {
            let response = await fetch (`http://localhost:3000/api/todos/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    todo: inputValue
                }),
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                }
            });
            if(response.ok) {
                let resData = await response.json();
                console.log('todo was edited', resData);
                alert(`edited todo to ${resData}`)
            } else {
                console.log('failed to edit todo')
                alert('failed to edit todo')
            }
        }catch(error) {
            console.log(error.stack)
        }
    }

return (
    <div>
        <input onChange={handleEdit} type='text' placeholder='edit todo here' id='editTodo'/>
    </div>
)
}

export default EditButton2