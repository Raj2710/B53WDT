import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function useLogout() {
    let navigate = useNavigate()
  return ()=>{
    toast.error('Logout Successful')
    sessionStorage.clear()
    navigate('/')
  }
}

export default useLogout