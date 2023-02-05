import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../actions/auth';

function LoginPage({login}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  return (
    <Container className='mt-5'>
      <h4 className='mb-4'>Login:</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" className="me-2" type="submit" onClick={(e) => {login(email, password)}}>
        Submit
      </Button>
      <Button variant="secondary" type="submit" onClick={() => { navigate('/register'); }}>
        Register
      </Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login({email, password}))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);