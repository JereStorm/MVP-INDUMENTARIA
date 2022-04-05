import React from "react";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
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
    <Router>
      <Layout>
        <Routes>
          {/* HOME */}
          <Route exact path="/" element={<HomePage />} />
          {/* LOGIN */}
          <Route
            exact
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />

          {/* PRODUCTOS */}
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/product/:productId" element={<ProductPage />} />
          {/* ADMIN */}
          <Route
            exact
            path="/admin/users"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
          <Route exact path="/admin/users" element={<UsersPage />} />

          {/* ERRORPAGE */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
