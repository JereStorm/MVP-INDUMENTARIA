import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function RegisterPage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      <Form className="w-50 text-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="info" type="submit">
          Registarse
        </Button>
      </Form>
    </Container>
  );
}
