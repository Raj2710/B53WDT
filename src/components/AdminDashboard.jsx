import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/AxiosService'
import { useLogout } from '../hooks/useLogout';
import {toast} from 'react-toastify'
import Table from 'react-bootstrap/Table';
import ApiRoutes from '../utils/ApiRoutes';
import Topbar from './Topbar';
import { Button } from 'react-bootstrap';

function AdminDashboard() {

  let [users,setUsers] = useState([])
  let logout = useLogout()
  let getData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.GET_USERS.path}`,{
        authenticate:ApiRoutes.GET_USERS.authenticate
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        setUsers(res.data.users)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status===402)
        logout()
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return <div>
  <Topbar/>
    <div className='container-fluid'>
    <Button onClick={getData}>Refresh</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
            return <tr key={e._id}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.status?"Active":"Inactive"}</td>
              <td>{e.createdAt}</td>
            </tr>
          })
        }
      </tbody>
    </Table>

    </div>
  </div>
}

export default AdminDashboard