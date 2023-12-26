import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Dashboard({user,setUser}) {
    
    let data = [
        {
            title:"EARNINGS (MONTHLY)",
            value:"$45,000",
            color:'primary',
            icon:'fa-calendar',
            isProgress:false
        },
        {
            title:"EARNINGS (ANNUAL)",
            value:"$215,000",
            color:'success',
            icon:'fa-dollar-sign',
            isProgress:false
        },
        {
            title:"TASKS",
            value:"20",
            color:'info',
            icon:'fa-clipboard-list',
            isProgress:true
        },
        {
            title:"PENDING REQUEST",
            value:"18",
            color:'warning',
            icon:'fa-comments',
            isProgress:false
        }
    ]
    let navigate = useNavigate()

    let handleDelete = (id)=>{
        let index;
        for(let i = 0;i<user.length;i++)
        {
            if(user[i].id==id)
            {
                index = i
                break;
            }
        }
        let newArray = [...user]//deep copy or Immutable
        newArray.splice(index,1)
        setUser(newArray)
    }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                    {
                        data.map((e,i)=>{
                            return <Card cardData={e} key={i}/>
                        })
                    }
                </div>
                <div className="row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            user.map((e,i)=>{
                                return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.batch}</td>
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                                    </td>
                                </tr>
                            })
                       }
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Dashboard