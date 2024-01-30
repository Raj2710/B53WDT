import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
export const useLogout = ()=>{
    let navigate = useNavigate()

    return ()=>{
        toast.error("Logged Out Successfully")
        sessionStorage.clear()
        navigate('/')
    }
}