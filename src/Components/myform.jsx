import React, { Component } from 'react';
import { Form, Container,  Button } from 'react-bootstrap';

class Myform extends Component {
    render() {
        return (
            <Container>
                <h1 className="form-header"> Reach out!</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Write message here"/>
                    </Form.Group>
                </Form>
                <Button className="form-button">Send!</Button>
            </Container>
        )
    }
}

export default Myform;