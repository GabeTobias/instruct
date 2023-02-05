import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../actions/auth';

function Register({register}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  function Submit(){
    if(confirm !== password){
      //This is an error
    } else {
      register(email, password);
    }
  }

  return (
    <Container className='mt-5'>
      <h4 className='mb-4'>Register:</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      </Form.Group>
      <Button variant="primary" className="me-2" type="submit" onClick={(e) => Submit()}>
        Submit
      </Button>
      <Button variant="secondary" className="me-2" type="submit" onClick={(e) => navigate('/login')}>
        Login
      </Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  register: (email, password) => dispatch(register({email, password}))
});

export default connect(undefined, mapDispatchToProps)(Register);