import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

export default function Coments() {
  return (
    <section>
      <Card>
        <Container>
          <ListGroup variant="flush" className="w-auto">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Container>
      </Card>
    </section>
  );
}
