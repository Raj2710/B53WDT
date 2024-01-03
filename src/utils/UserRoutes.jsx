import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Cart from '../components/users/Cart'
import Home from '../components/users/Home'
import Product from '../components/users/Product'
import TopBar from '../components/common/TopBar'
function UserRoutes() {
  return <>
  <TopBar/>
  <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = 'cart' element={<Cart/>}/>
    <Route path = 'product/:id' element={<Product/>}/>
    <Route path = '*' element={<Navigate to='/'/>}/>
  </Routes>
</>
}

export default UserRoutes