import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  let navigate = useNavigate()
  const handleSubmit = async(e)=>{
   try {
    e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); 

    
    let res = await AxiosService.post(`${ApiRoutes.SIGN_IN.path}`,formProps,{
      authenticate:ApiRoutes.SIGN_IN.authenticate
    })
    if(res.status===200)
    {
        toast.success(res.data.message)

        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role',res.data.role)
        sessionStorage.setItem('id',res.data.id)

        if(res.data.role==='admin')
          navigate('/admin')
        else if(res.data.role==='user')
          navigate('/user')
    }
   } catch (error) {
      toast.error(error.response.data.message || error.message)
   }
  }
  return <>
    <div className='signin-wrapper'>
      <h2 className='textAlignCenter'>Sign In to Continue</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default SignIn