import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Create() {
  let [title,setTitle] = useState("")
  let [image,setImage] = useState("")
  let [description,setDesc] = useState("")
  let navigate = useNavigate()

  const handleCreate = async()=>{
    try {
      let data = {title,image,description,status:false}
      let res = await axios.post(API_URL,data)
      if(res.status===201)
      {
        toast.success("Blog Created Successfully")
        navigate('/dashboard')
      }

    } catch (error) {
      
    }
  }
  return <div className='container-fluid'>
      <Topbar/>
      <div className='homeWrapper'>
      <div className='formWrapper'>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Image Url" onChange={(e)=>{setImage(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}/>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>handleCreate()}>
          Submit
        </Button>
      </Form>
      </div>
      <div className='previewWrapper'>
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <BlogCard
          title={title}
          image={image}
          description={description}
        />
      </div>
      </div>
  </div>
}

export default Create