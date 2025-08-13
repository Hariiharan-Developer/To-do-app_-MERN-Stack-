import { useState } from 'react'
import './todo.css'
export default function Todo (){
  const [title,setTitle]  =useState('')
  const [description,setDescription]  =useState('')
  const [todos,setTodos]  =useState([])
  const [error,setError]  =useState('')
  const [message,setMessage]  =useState('')
  const apiUrl = 'http://localhost:3000'


const handleSubmit =()=>{
if (title.trim()!=='' && description.trim()!==''){

fetch(apiUrl + '/todos', {
  method:'POST',
  headers:{
    'Content-Type' : 'application/json'
  },
  
  body:JSON.stringify({title,description})
})
.then((res)=>{
if(res.ok){
  setTodos([...todos,{title,description}])
 setMessage('Item Added Successfully')
}
else{
  setError('Unable to create todo list')
}
})
// .catch(() => setError('Network error while creating todo'))



}


}

  return<>
  <div className="row p-3 bg-primary text-dark fw-bold text-center">
    <h1>To-do-App</h1>
    <h3>CRUD-Operation in MERN</h3>
</div>

<div className='row'>
  <h3>Add item</h3>
  {message && <p className='text-success'>{message}</p> }

  <div className='form-group d-flex gap-2'>
  <input className='form-control' type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
  <input className='form-control' type='text' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
  <button className='btn btn-dark' onClick={handleSubmit}>submit</button>

  </div>
{error && <p className='text-danger'>{error}</p>}  
</div>
  </>
}