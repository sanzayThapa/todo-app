import React from 'react'
import { MdOutlineDeleteSweep, MdCheckBoxOutlineBlank, MdCheckBox, MdEditNote, MdOutlineCheckBoxOutlineBlank  } from "react-icons/md";


export const Table = () => {
  return (
    <div className='py-8'>
      <table className='w-11/12 max-w-4x1'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'> Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Data Created</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'><MdCheckBox/></span>
            </th>
            <th className='p-3 text-sm'>Task1</th>
            <th className='p-3 text-sm'>
              <span className='p-1.5 text-xs font-medium tracking-wider bg-green-300 rounded-md'>Done</span>
            </th>
            <th className='p-3 text-sm'>22-08-2024</th>
            <th className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-xl cursor-pointer'><MdEditNote/></span>
            <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
            </th>

          </tr>
          <tr>
            <th className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'><MdCheckBox/></span>
            </th>
            <th className='p-3 text-sm'>Task1</th>
            <th className='p-3 text-sm'>
              <span className='p-1.5 text-xs font-medium tracking-wider bg-green-300 rounded-md'>Done</span>
            </th>
            <th className='p-3 text-sm'>22-08-2024</th>
            <th className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-xl cursor-pointer'><MdEditNote/></span>
            <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
            </th>

          </tr>
          <tr>
            <th className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'><MdCheckBox/></span>
            </th>
            <th className='p-3 text-sm'>Task1</th>
            <th className='p-3 text-sm'>
              <span className='p-1.5 text-xs font-medium tracking-wider bg-green-300 rounded-md'>Done</span>
            </th>
            <th className='p-3 text-sm'>22-08-2024</th>
            <th className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-xl cursor-pointer'><MdEditNote/></span>
            <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
            </th>

          </tr>
          <tr>
            <th className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'><MdCheckBox/></span>
            </th>
            <th className='p-3 text-sm'>Task1</th>
            <th className='p-3 text-sm'>
              <span className='p-1.5 text-xs font-medium tracking-wider bg-green-300 rounded-md'>Done</span>
            </th>
            <th className='p-3 text-sm'>22-08-2024</th>
            <th className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-xl cursor-pointer'><MdEditNote/></span>
            <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
            </th>

          </tr>
          <tr>
            <th className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'><MdCheckBox/></span>
            </th>
            <th className='p-3 text-sm'>Task1</th>
            <th className='p-3 text-sm'>
              <span className='p-1.5 text-xs font-medium tracking-wider bg-green-300 rounded-md'>Done</span>
            </th>
            <th className='p-3 text-sm'>22-08-2024</th>
            <th className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-xl cursor-pointer'><MdEditNote/></span>
            <span className='text-xl inline-block cursor-pointer'><MdOutlineDeleteSweep/></span>
            </th>

          </tr>
        </tbody>
      </table>
    </div>
  )
}
