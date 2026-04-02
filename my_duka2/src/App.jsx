import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import Sales from "./pages/Sales"
import Purchases from './pages/Purchases'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { Protected } from "./components/Protected"




const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route element={<Protected />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/purchases' element={<Purchases />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
// rafce