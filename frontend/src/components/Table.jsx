import React from 'react';
import { MdOutlineDeleteSweep, MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineCheckBox, MdEditNote, MdOutlineCheckBoxOutlineBlank  } from "react-icons/md";

export const Table = ({todo, setTodo, isLoading}) => {
  return (
    <div className='py-8'>
      <table className='w-11/12 max-w-4xl'>
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
                  <span className='inline-block cursor-pointer'>{todoItem.completed ? <MdOutlineCheckBox/> : <MdOutlineCheckBoxOutlineBlank/>}</span>
                </td>
                <td className='p-3 text-sm'>{todoItem.body}</td>
                <td className='p-3 text-sm text-center'>
                  <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'}`}>
                    {todoItem.completed ? 'Done' : 'Incomplete'}
                  </span>
                </td>
                <td className='p-3 text-sm'>{new Date(todoItem.created).toLocaleString()}</td>
                <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                  <span className='text-xl cursor-pointer'><MdEditNote/></span>
                  <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
