import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function Login() {
    return (
        <div className='myBG'>
            <div className='border login'>

                <Container className=' text-white d-flex justify-content-center bg border'>
                    <Row>
                        <Col>
                            <Card bg='light' className='card'>
                                <div className='title'>Login To</div>
                                <div className='title'>Continue</div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="form-label">Your Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Your Password:</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember my account" />
                                    </Form.Group>




                                    <div className='logbutton'>
                                        <Button variant="warning" type="submit" className='w-50'>
                                            Login
                                        </Button>
                                    </div>

                                    <div className='logo-container'>
                                        <Image src={Facebook} className='image' />
                                        <Image src={Google} className='image' />
                                        <Image src={Apple} className='image' />
                                    </div>
                                </Form>
                                <div className='link-container'>
                                    <Card.Link href="#" className='card-link'>Forgot Password?</Card.Link>
                                    <Card.Link href="#" className='card-link'>Create an Account!</Card.Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default Login