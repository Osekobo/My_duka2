import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import Sales from "./pages/Sales"
import Purchases from './pages/Purchases'
import Layout from './layout/Layout'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
// rafce