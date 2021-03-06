import React from "react";

// ROUTER
import { Routes, Route } from "react-router-dom";
import Roles from "../helpers/Roles";
import routes from "../helpers/Routes";
// PAGES
import AccountPage from "../sections/AccountPage";
import UsersPage from "../sections/admin/UsersPage";
import HomePage from "../sections/HomePage";
import LoginPage from "../sections/LoginPage";
import NotFoundPage from "../sections/NotFoundPage";
import ProductPage from "../sections/ProductPage";
import ProductsPage from "../sections/ProductsPage";
import RegisterPage from "../sections/RegisterPage";
// ENRUTADOS
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path={routes.home} element={<HomePage />} />
      <Route
        exact
        path={routes.login}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={routes.register}
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={routes.account}
        element={
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        }
      />

      <Route exact path={routes.products} element={<ProductsPage />} />
      <Route exact path={routes.product(1)} element={<ProductPage />} />
      <Route
        exact
        path={routes.admin}
        element={
          <PrivateRoute hasRole={Roles.admin}>
            <UsersPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
