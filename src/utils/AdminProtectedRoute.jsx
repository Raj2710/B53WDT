import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function AdminProtectedRoute({children}) { 
    let role = sessionStorage.getItem('role')

  return role==='admin'?children:<Navigate to='/'/>
}

export default AdminProtectedRoute