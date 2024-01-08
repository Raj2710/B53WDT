import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
function EditUser({user,setUser}) {

  let params = useParams()//this will return a object

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [batch,setBatch] = useState("")
  let [mobile,setMobile] = useState("")

  let navigate = useNavigate()// this will return a function

  const handleEdit = async()=>{
    let {id} = params
    try {
      let res = await AxiosService.put(`/user/${id}`,{
        id,
        name,
        email,
        batch,
        mobile
      })
      if(res.status===200)
        navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
    
  }

  const getUserData = async()=>{
    let {id} = params
    try {
      let res = await AxiosService.get(`/user/${id}`)
      if(res.status===200)
      {
        setName(res.data.name)
        setEmail(res.data.email)
        setMobile(res.data.mobile)
        setBatch(res.data.batch)
      }
  } catch (error) {
      console.log(error)
  }
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