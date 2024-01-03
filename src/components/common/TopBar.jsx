import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useLocation,useNavigate} from 'react-router-dom'
const adminPaths = [{
        name:'Dashbaord',
        path:'/admin/dashboard'
    },
    {
        name:'Add Product',
        path:'/admin/add-product'
    }
]
const userPaths = [{
        name:'Home',
        path:'/'
    },
    {
        name:'Cart',
        path:'/cart'
    }
]
function TopBar() {
    let location = useLocation()
    let [paths,setPaths] = useState([])
    // console.log(location.pathname)
    let navigate = useNavigate()
    useEffect(()=>{
        let paths = location.pathname.split('/')
        if(paths.includes('admin'))
        {
            setPaths(adminPaths)
        }
        else
        {
            setPaths(userPaths)
        }
    },[])

  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={()=>navigate('/')} style={{cursor:"pointer"}}>ShopiCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
                paths.map((e,i)=>{
                    return <Nav.Link onClick={()=>navigate(e.path)} key={i}>{e.name}</Nav.Link>
                })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar