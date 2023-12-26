import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
function EditUser({user,setUser}) {

  let params = useParams()//this will return a object

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [batch,setBatch] = useState("")
  let [mobile,setMobile] = useState("")

  let navigate = useNavigate()// this will return a function

  const findIndex = (id)=>{
    for(let i = 0; i<user.length;i++)
    {
      if(id === user[i].id)
        return i
    }
  }

  const handleEdit = ()=>{
    let id = Number(params.id)
    let index = findIndex(id)
    let newArray = [...user]// deep copy Achieve Immutability
    newArray.splice(index,1,{
      id,
      name,
      email,
      batch,
      mobile
    })
    setUser(newArray)
    navigate('/dashboard')
  }

  const getUserData = ()=>{
    let id = Number(params.id)
    let index = findIndex(id)
  
    setName(user[index].name)
    setEmail(user[index].email)
    setMobile(user[index].mobile)
    setBatch(user[index].batch)
  }


  useEffect(()=>{
    getUserData()
  },[])

  //useEffect - triggers before component rendering
  //useEffect without dependency array - triggers before component rendering and during state changes
  // useEffect(()=>{
  //   console.log("Use Effect Without Dependency Array")
  // })

  //useEffect with empty dependency array - triggers before component rendering only for first time
  // useEffect(()=>{
  //   console.log("Use Effect With Empty Dependency Array")
  // },[])

  //useEffect with dependancy array - triggers before component rendering and specified state changes
  // useEffect(()=>{
  //   console.log("Use Effect With Dependency Array")
  // },[batch,mobile])


  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                </div>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>
          
          <Button variant="primary" onClick={()=>handleEdit()}>
            Submit
          </Button>
    </Form>
        </div>
    </div>
  </div>
}

export default EditUser