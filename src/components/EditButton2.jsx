const EditButton2 = ({id}) => {
  
 // const handleClick = async() => {
    //     try {
    //         let response = await fetch (`http://localhost:3000/api/todos/${}`)
    //     }catch(error) {
    //         console.log(error.stack)
    //     }
    // }
return (
    <div>
        <input type='text' placeholder='edit todo here' id={id}/>
    </div>
)
}

export default EditButton2