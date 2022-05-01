import React from "react";
import { Button, Card as CardBoot } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../../helpers/Routes";

export default function Card({ producto, key }) {
  return (
    <CardBoot style={{ width: "18rem" }}>
      <CardBoot.Img variant="top" src={producto.src} />
      <CardBoot.Body className="text-center d-flex flex-column">
        <CardBoot.Title>{producto.nombre}</CardBoot.Title>
        <CardBoot.Text className="mt-auto">${producto.precio}</CardBoot.Text>
        <Button as={NavLink} to={routes.product(1)} className="info mt-auto">
          VER PRODUCTO
        </Button>
      </CardBoot.Body>
    </CardBoot>
  );
}
