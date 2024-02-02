import React,{useState,useEffect} from 'react'
import TopBar from './TopBar'
import Form from 'react-bootstrap/Form';
import { useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ApiRoutes } from '../../utils/ApiRoutes';
import AxiosService from '../../utils/AxiosService'
import Table from 'react-bootstrap/Table';
import { capitaliseFirstWord } from '../../utils/Helper';
import { Button } from 'react-bootstrap';
function Request() {
    let params = useParams()
    let navigate = useNavigate()
    let [data,setData] = useState({})
    const getData = async()=>{
        try {
            let res = await AxiosService.get(`${ApiRoutes.CREATE_REQUEST.path}/${params.id}`,{
                authenticate:ApiRoutes.CREATE_REQUEST.authenticate
              })
            if(res.status===200)
            {
                setData(res.data.request)
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const markResolved = async(e)=>{
      e.preventDefault()
      try {
        console.log("Here")
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        formProps._id = params.id

        let res = await AxiosService.put(ApiRoutes.RESOLVE.path,
          formProps,
          {authenticate:ApiRoutes.RESOLVE.authenticate}
        )
        
        if(res.status===200)
        {
          toast.success(res.data.message)
          getData()
        }

      } catch (error) {
        toast.error(error?.response?.data?.message || error.message)
      }
    }

    const assignToMe = async(e)=>{
      try {
        let userId = sessionStorage.getItem('id')
        let res = await AxiosService.put(`${ApiRoutes.ASSIGN.path}`,{
          _id:params.id,
          userId
        },{authenticate:ApiRoutes.ASSIGN.authenticate})

        if(res.status==200)
        {
            toast.success(res.data.message)
            getData()

        }
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message)
      }
    }

    useEffect(()=>{
        if(params.id)
            getData()
        else
            navigate('/')
    },[])
  return <div>
    <TopBar/>
    <Table striped bordered hover>
      <tbody>
        {
            data?Object.keys(data).map((e,i)=>{
                return <tr key={i}>
                    <td>{capitaliseFirstWord(e)}</td>
                    <td>{data[e]}</td>
                </tr>
            }):<></>
        }
      </tbody>
    </Table>
      <div>
        {
          data.status==="Open"?<>
            <Button variant="warning" onClick={()=>assignToMe()}>Assign To Me</Button>
          </>:<></>
        }
        {
          data.status==="In-Progress"?<>
            <Form onSubmit={markResolved}>
              <Form.Group className="mb-3" >
              <Form.Label>Resolution</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="What are the actions taken"
                name="resolution"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Button variant="success" type='submit'>Mark as Resolved</Button>
            </Form>
          </>:<></>
        }
      </div>
  </div>
}

export default Request