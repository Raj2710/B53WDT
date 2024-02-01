import React, { useEffect,useState } from 'react'
import TopBar from '../TopBar'
import { useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ApiRoutes } from '../../utils/ApiRoutes';
import AxiosService from '../../utils/AxiosService'
import Table from 'react-bootstrap/Table';
import { capitaliseFirstWord } from '../../utils/Helper';
function RequestById() {
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

  </div>
}

export default RequestById