import React from 'react'
import TopBar from '../TopBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/AxiosService'
import { ApiRoutes } from '../../utils/ApiRoutes';
function Request() {
  
  const navigate = useNavigate()
  
  const handleCreate = async(e)=>{
    e.preventDefault()
    try {
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      
      let res = await AxiosService.post(`${ApiRoutes.CREATE_REQUEST.path}`,formProps,{
        authenticate:ApiRoutes.CREATE_REQUEST.authenticate
      })

      if(res.status===201)
      {
        toast.success(res.data.message)
        navigate(`/request/${res.data.id}`)
      }

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }
  return <div>
    <TopBar/>
    <div className='container-fluid'>
    <Form onSubmit={handleCreate}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" name="phone"/>
      </Form.Group>
     
      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Select name="type">
          <option value="Complaint">Complaint</option>
          <option value="Enquiry">Enquiry</option>
          <option value="Service">Service</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name="title"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="description"
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  </div>
}

export default Request