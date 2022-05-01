import React from "react";

const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  account: "/account",
  product: (productId) =>
    productId ? `/product:${productId}` : "`/product:productId",
  products: "/products",
  admin: "/admin/users",
};

export default routes;
