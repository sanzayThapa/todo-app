import React from 'react';

const TodoForm = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Add your todo task" 
          className="input input-accent w-full max-w-xs" 
        />
        <button className="btn btn-active btn-primary ml-3">Add Todo</button>
      </div>
    </div>
  );
};

export default TodoForm;