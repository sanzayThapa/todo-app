import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import { Table } from './components/Table'
import axios from 'axios'


function App() {
  const [todo, setTodo] = useState("")
  const [isLoading, setisLoading] = useState(true)

  useEffect( () => {
    fetchData()
    console.log(todo)
  },[] )

  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/todo/")
      setTodo(response.data)
      setisLoading(false)

    }catch (error){
      console.log(error);
    }
  }


  return (
    <div className='bg-indigo-100 min-h-screen'>
      <nav className='pt-8'>
      <h1 className='text-6xl text-center pb-10'>Todo Lists</h1>
      </nav>
      <TodoForm
      setTodo={setTodo}
      fetchData={fetchData}
      />
      <Table 
      todo={todo}
      setTodo={setTodo}
      isLoading={isLoading}

      />
    </div>
  )
}

export default App
