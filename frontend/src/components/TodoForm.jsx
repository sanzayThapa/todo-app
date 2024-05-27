import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({setTodo, fetchData}) => {
  const [newTodo, setNewTodo] = useState({
    'body': ''
  })
  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      'body': e.target.value
  }))
  console.log(newTodo);
}

const postTodo = async () => {
  try {
    await axios.post('http://localhost:8000/api/todo/', newTodo)
    // setTodo(prevTodo => [...prevTodo,newTodo])
    setNewTodo({'body': ''})
    fetchData()
  } catch(error){
    console.log(error);
  }
}





  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Add your todo task" 
          className="input input-accent w-full max-w-xs" 
          onChange={handleChange} value={newTodo.body}
          onKeyDown={(e) =>{
            if(e.key === 'Enter'){
              postTodo()
            }
          }}
        />
        <button className="btn btn-active btn-primary ml-3" onClick={postTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoForm;