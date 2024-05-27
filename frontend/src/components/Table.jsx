import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineDeleteSweep, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdEditNote } from "react-icons/md";

export const Table = ({ todo, setTodo, isLoading }) => {
  const [editText, setEditText] = useState({
    id: null,
    body: ''
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/todo/${id}/`);
      const newList = todo.filter(todoItem => todoItem.id !== id);
      setTodo(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/todo/${id}/`, value);
      const newTodo = todo.map(todoItem => todoItem.id === id ? response.data : todoItem);
      setTodo(newTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (id, value) => {
    handleEdit(id, { 'completed': !value });
  };

  const handleChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }));
  };

  const handleClick = () => {
    handleEdit(editText.id, editText);
    setEditText({
      id: null,
      'body': ''
    });
  };

  return (
    <div className='py-8 flex justify-center'>
      <div className='w-11/12 max-w-4xl overflow-x-auto'>
        <table className='min-w-full'>
          <thead className='border-b-2 border-black'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Created</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="text-center">Is Loading</td>
              </tr>
            ) : (
              todo.map((todoItem) => (
                <tr key={todoItem.id} className='border-b border-black'>
                  <td className='p-3 text-sm' title={todoItem.id}>
                    <span onClick={() => handleCheckbox(todoItem.id, todoItem.completed)} className='inline-block cursor-pointer'>
                      {todoItem.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                    </span>
                  </td>
                  <td className='p-3 text-sm'>{todoItem.body}</td>
                  <td className='p-3 text-sm text-center'>
                    <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'}`}>
                      {todoItem.completed ? 'Done' : 'Incomplete'}
                    </span>
                  </td>
                  <td className='p-3 text-sm'>{new Date(todoItem.created).toLocaleString()}</td>
                  <td className='p-3 text-sm font-medium flex space-x-2'>
                    <span className='text-xl cursor-pointer'>
                      <label htmlFor="my_modal_6" className="btn" onClick={() => setEditText(todoItem)}><MdEditNote /></label>
                    </span>
                    <span className='text-xl cursor-pointer'><MdOutlineDeleteSweep onClick={() => handleDelete(todoItem.id)} /></span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Todo</h3>
          <input
            type="text"
            placeholder="Type here"
            value={editText.body}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs mt-8"
          />
          <div className="modal-action">
            <label htmlFor="my_modal_6" onClick={handleClick} className="btn btn-primary">Edit</label>
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};
