import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { useFormik } from 'formik';
import * as Yup from 'yup'
function EditUser() {

  let params = useParams()//this will return a object
  let [initialValues,setValues] = useState({
    name:'',
    email:'',
    mobile:'',
    batch:''
  })
 

  let navigate = useNavigate()// this will return a function

  const getUserData = async()=>{
    let {id} = params
    try {
      let res = await AxiosService.get(`/user/${id}`)
      if(res.status===200)
      {
        setValues({
          name:res.data.name,
          email:res.data.email,
          mobile:res.data.mobile,
          batch:res.data.batch
        })
      }
  } catch (error) {
      console.log(error)
  }
  }

  let formik = useFormik({
    initialValues:initialValues,
    validationSchema:Yup.object({
      name:Yup.string().required('Name is required').max(20,'Name can not exceed 20 characters').min(3,'Name can not be shorter than 3 leters'),
      email:Yup.string().required('Email is required').email('Enter a valid email'),
      mobile:Yup.string().required('Mobile is required').matches(/^\d{10}$/,'Enter a valid mobile number'),
      batch:Yup.string().required('Batch is required')
    }),
    enableReinitialize:true,
    onSubmit:async (values)=>{
      let {id} = params
      values.id = id
    try {
        let res = await AxiosService.put(`/user/${id}`,values)
        if(res.status===200)
          navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }})



  useEffect(()=>{
    getUserData()
  },[])

  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                </div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}}>{formik.errors.name}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" id="mobile" name="mobile" onChange={formik.handleChange} value={formik.values.mobile} onBlur={formik.handleBlur}/>
            {formik.touched.mobile && formik.errors.mobile ? (<div style={{color:"red"}}>{formik.errors.mobile}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Batch" id="batch" name="batch" onChange={formik.handleChange} value={formik.values.batch} onBlur={formik.handleBlur}/>
            {formik.touched.batch && formik.errors.batch ? (<div style={{color:"red"}}>{formik.errors.batch}</div>) : null}
          </Form.Group>
          
          <Button variant="primary" type='submit'>
            Submit
          </Button>
      </Form>
        </div>
    </div>
  </div>
}

export default EditUser