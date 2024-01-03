import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Dashboard from '../components/admin/Dashboard'
import AddProduct from '../components/admin/AddProduct'
import EditProduct from '../components/admin/EditProduct'
import TopBar from '../components/common/TopBar'
function AdminRoutes() {
  return <>
  <TopBar/>
    <Routes>
      <Route path = 'dashboard' element={<Dashboard/>}/>
      <Route path = 'add-product' element={<AddProduct/>}/>
      <Route path = 'edit-product/:id' element={<EditProduct/>}/>
      <Route path = '*' element={<Navigate to = 'dashboard'/>}/>
    </Routes>
  </>
}

export default AdminRoutes