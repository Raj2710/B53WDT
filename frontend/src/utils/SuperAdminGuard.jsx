import React from 'react'
import { Navigate } from 'react-router-dom'

function SuperAdminGuard({children}) {
    let role = sessionStorage.getItem('role')
  return <> 
    {
        role==='super-admin'?children:<Navigate to='/admin/dashboard'/>
    }
</>
}

export default SuperAdminGuard