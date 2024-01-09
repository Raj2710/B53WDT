import React,{useEffect} from 'react'
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { saveAllBlogs,deleteBlog,toggleBlog } from '../redux/BlogSlice';

function Dashboard() {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let blogs = useSelector(state=>state.blogs)

  const getBlogs=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
        dispatch(saveAllBlogs(res.data))
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }

  const handleDelete = async(id)=>{
    try {
      dispatch(deleteBlog(id))
      let res = await axios.delete(`${API_URL}/${id}`)
      if(res.status===200)
      {
        toast.success('Blog Deleted Successfully!')
        getBlogs()
      }
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }

  const toggleBlogById = async(e)=>{
    try {
      dispatch(toggleBlog(e.id))
      let res = await axios.put(`${API_URL}/${e.id}`,{
        ...e,
        status:!e.status
      })
      if(res.status===200)
      {
        toast.success('Blog Status Changed!')
        getBlogs()
      }
      
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])
  return <div className='container-fluid'>
    <Topbar/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td>
                <img src={e.image} alt={e.title} style={{width:"50px"}}/>
              </td>
              <td >
                <div style={{width:"300px", overflow:"hidden", whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                  {e.description}
                </div>
              </td>
              <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onChange={()=>toggleBlogById(e)}/>
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <Button variant="info" onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                &nbsp;
                <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </div>
}

export default Dashboard