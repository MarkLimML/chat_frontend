import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Container>
        <Row>
            <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="name" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div className='py-4'>
                        <p className='text-center'>
                            No Account Yet? <Link to="/signup">Signup</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login