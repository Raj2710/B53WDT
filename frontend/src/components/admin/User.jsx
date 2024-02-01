import React, { useEffect,useState } from 'react'
import TopBar from './TopBar'
import AxiosService from '../../utils/AxiosService'
import { ApiRoutes } from '../../utils/ApiRoutes'
import { Table } from 'react-bootstrap'
import { capitaliseFirstWord } from '../../utils/Helper'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
function User() {

    let navigate = useNavigate()
    let [users,setUsers] = useState([])
    const getUsers = async()=>{
        try {
            let res = await AxiosService.get(ApiRoutes.GET_ALL_USERS.path,{
                authenticate:ApiRoutes.GET_ALL_USERS.authenticate
            })
            if(res.status===200)
            {
                setUsers(res.data.users)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
  return <div>
    <TopBar/>
    <Button variant='warning' onClick={()=>navigate('/admin/create')} style={{margin:"10px"}}>Create User</Button>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((e,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.status?"Active":"Inactive"}</td>
                        <td>{capitaliseFirstWord(e.role)}</td>
                        <td>{e.createdAt}</td>
                    </tr>
                })
            }
        </tbody>
    </Table>
  </div>
}

export default User