import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout'
import { capitaliseFirstWord } from '../../utils/Helper';
function TopBar() {
  let navigate = useNavigate()
  let logout = useLogout()
  let role = sessionStorage.getItem('role')
  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Zen Desk - {capitaliseFirstWord(role)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/admin/dashboard')}>Dashboard</Nav.Link>
            {role==="super-admin"?<Nav.Link onClick={()=>navigate('/admin/user')}>User</Nav.Link>:<></>}
          </Nav>
          <Button variant='danger' onClick={logout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
}

export default TopBar;