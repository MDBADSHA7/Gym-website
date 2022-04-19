import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './LogIn.css'
const LogIn = () => {
    return (
        <div className='container-login w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};
export default LogIn;