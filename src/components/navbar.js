import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { connect } from 'react-redux'
import { logout } from '../actions/auth';

function NavBar({loggedIn, logout}) {
  
  function LoginToggle(){
    if(loggedIn){
      logout();
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Instruct</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ms-5"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-4'>Search</Button>
          </Form>
          <Nav.Link href="/login" onClick={() => LoginToggle()} className='me-2'>{ loggedIn ? "Signout": "Login" }</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const propsMap = ({loggedIn}) => {
  return {
    loggedIn
  };
}

const dispatchMap = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(propsMap, dispatchMap)(NavBar);