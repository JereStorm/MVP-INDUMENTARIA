import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/Routes";

export default function NotFoundPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          md={{ span: 6, offset: 3 }}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <img src="/images/404-not-found.svg" alt="error-404" width="70%" />
          <h1>¿Te has perdido?</h1>
          <p>
            Vuelve al <Link to={routes.home}>Inicio</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
