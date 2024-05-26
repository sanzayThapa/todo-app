import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <input type="text" placeholder="Add your todo task" className="input input-accent w-full max-w-xs" />
      <button className="btn btn-active btn-primary ml-3">Add Todo</button>
    </div>
  )
}

export default TodoForm