import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import { Table } from './components/Table'


function App() {

  return (
    <div className='bg-indigo-100 min-h-screen'>
      <nav className='pt-8'>
      <h1 className='text-5xl text-center pb-10'>Todo Lists</h1>
      </nav>
      <TodoForm/>
      <Table/>
    </div>
  )
}

export default App
