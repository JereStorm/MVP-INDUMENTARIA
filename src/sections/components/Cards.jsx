import React from "react";
import Card from "./Card";

export default function Cards() {
  const productos = [
    {
      tipo: "Buzo",
      nombre: "BUZO CUELLO REDONDO",
      src: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/768/960/products/whatsapp-image-2022-04-11-at-2-46-47-pm-13faaec59515bce49b16497059226645-640-0.jpeg",
      precio: 4200,
      id: 1,
    },
    {
      tipo: "Remera",
      nombre: "REMERA ALGODON LISA DOBLE MANGA",
      src: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/768/960/products/whatsapp-image-2022-04-07-at-9-40-43-am1-ba604b59e7d46f2b5f16493504354279-320-0.jpeg",
      precio: 6500,
      id: 2,
    },
    {
      tipo: "Conjunto",
      nombre: "BIKER COMBINADA",
      src: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/768/960/products/whatsapp-image-2021-12-17-at-16-44-511-9df4c34199fd22471716413070555619-320-0.jpeg",
      precio: 3700,
      id: 3,
    },
    {
      tipo: "Pantalones",
      nombre: "CANGURO UNISEX",
      src: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/768/960/products/whatsapp-image-2022-04-01-at-12-40-16-pm-b362cd662d4087578e16489095521338-320-0.jpeg",
      precio: 4500,
      id: 4,
    },
  ];
  return (
    <div className="d-flex flex-wrap gap-1 justify-content-center">
      {productos.map((producto) => (
        <Card producto={producto} key={producto.id} />
      ))}
    </div>
  );
}
