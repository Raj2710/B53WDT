import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { API_URL } from '../App';

function Dashboard() {
  let [users,setUsers] = useState([])

  const getData = async()=>{
      try {
        let res = await axios.get(`${API_URL}/user`)
        if(res.status===200)
        {
            setUsers(res.data.users)
        }
      } catch (error) {
        console.log(error)
      }
  }

  const handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`${API_URL}/user/${id}`)
      if(res.status===200)
      {
          getData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.status?"Active":"Inactive"}</td>
              <td>
                <Button variant='danger' onClick={()=>handleDelete(e._id)}>Delete</Button>
              </td>

            </tr>
          })
        }
      </tbody>
    </Table>
  );
}

export default Dashboard;