import React from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import Coments from "./components/Coments";

export default function ProductPage() {
  // EJEMPLO DE PRODUCTO
  const producto = {
    tipo: "Buzo",
    nombre: "BUZO CUELLO REDONDO",
    src: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/768/960/products/whatsapp-image-2022-04-11-at-2-46-47-pm-13faaec59515bce49b16497059226645-640-0.jpeg",
    precio: 4200,
    id: 1,
  };
  return (
    <section className="mt-5">
      <Container fluid>
        <Row>
          {/* EN PROCESO FILTRADO POR CAGETORIAS */}

          <Col className="col-6">
            <article className="d-flex justify-content-center">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={producto.src} />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text className="mt-auto">${producto.precio}</Card.Text>
                </Card.Body>
              </Card>
            </article>
          </Col>
          {/* EN PROCESO  COMENTARIOS */}
          <Col className="col-5">
            <Coments />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
