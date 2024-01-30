import React from 'react'
import { Navigate } from 'react-router-dom'
function UserProtectedRoute({children}) {
    let role = sessionStorage.getItem('role')
  return role==='user'?children:<Navigate to='/'/>
}

export default UserProtectedRoute