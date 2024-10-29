import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './crudApp/Home'
import Create from './crudApp/Create'
import Update from './crudApp/Update'
import Read from './crudApp/Read'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App