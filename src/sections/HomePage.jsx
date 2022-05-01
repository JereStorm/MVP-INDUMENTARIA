import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./components/MyCarousel";
import Cards from "./components/Cards";

export default function HomePage() {
  return (
    <>
      <hr />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <MyCarousel />
          </Col>
        </Row>
      </Container>
      <hr />
      <p className="section-title text-center">ULTIMOS INGRESOS</p>
      <hr />
      <section>
        <Cards />
      </section>
      <hr />
      <p className="section-title text-center">NUESTRAS MARCAS</p>
      <hr />
    </>
  );
}
