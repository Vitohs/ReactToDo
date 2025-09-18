import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ToList from './pages/todoList'
import TodoForm from './pages/todoForm'

function App() {

  return (
      <div className='min-h-screen bg-gray-50 p-6'>
          <header className='max-w-3xl mx-auto mb-6'>
              <nav className='flex items-center justify-between'>
                  <h1 className='text-2xl font-semibold'>Todo</h1>
              </nav>
          </header>
          <main className='max-w-3xl mx-auto bg-white rounded-lg shadow p-6'>
              <Routes>
                  <Route path='/' element={<ToList/>} />
                  <Route path='/new' element={<TodoForm/>} />
              </Routes>
          </main>
      </div>
  )
}

export default App
