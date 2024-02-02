import React,{useEffect,useState} from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/AxiosService'
import { ApiRoutes } from '../../utils/ApiRoutes';

const bgColor = {
  "Open":"danger",
  "In-Progress":"warning",
  "Clossed":"success"
}

const initialValue = [
  {_id:"Open",count:0},
  {_id:"In-Progress",count:0},
  {_id:"Clossed",count:0}

]

function Dashboard() {

  let navigate = useNavigate()

  let [countData,setCountData] = useState(initialValue)
  let [request,setRequest] = useState([])
  let [selectedReq,setSelectedReq] = useState("Open")

  const getCountData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.GET_COUNT.path}`,{
        authenticate:ApiRoutes.GET_COUNT.authenticate
      })

      if(res.status===200)
      {
        setCountData(res.data.countData)
      }
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const getRequestData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.CREATE_REQUEST.path}?status=${selectedReq}`,{
        authenticate:ApiRoutes.CREATE_REQUEST.authenticate
      })
      if(res.status===200)
      {
        setRequest(res.data.request)
      }
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(()=>{
    getCountData()
  },[])

  useEffect(()=>{
    getRequestData()
  },[selectedReq])

  return <div>
    <TopBar/>
    <div className="card-wrapper">
      {
        countData.map((e,i)=>{
          return <div onClick={()=>setSelectedReq(e._id)} key={i}>
            <Card color={bgColor[e._id]} title={e._id} count={e.count}  />
            </div>
        })
      }
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>Name</th>
          <th>Email</th>
          {selectedReq!=="Open"?<th>Assigned To</th>:<></>}
          <th>Created Date</th>
          {selectedReq==="In-Progress"?<th>Assigned At</th>:<></>}
          {selectedReq==="Clossed"?<th>Clossed At</th>:<></>}
        </tr>
      </thead>
      <tbody>
        {
          request.map((e,i)=>{
            return <tr key={i} onClick={()=>navigate(`/admin/request/${e._id}`)} style={{cursor:"pointer"}}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td>{e.type}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              {selectedReq!=="Open"?<td>{e.assignedTo}</td>:<></>}
              <td>{e.createdAt}</td>
              {selectedReq==="In-Progress"?<td>{e.assignedAt}</td>:<></>}
              {selectedReq==="Clossed"?<td>{e.clossedAt}</td>:<></>}
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </div>
}

export default Dashboard

function Card ({color,title,count}){
  return <div className={`card-outline bg-${color}`}>
    <h2>{title}</h2> 
    <h2>{count}</h2>
  </div>
}