import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AccountPage from "../sections/AccountPage";
import UsersPage from "../sections/admin/UsersPage";
import HomePage from "../sections/HomePage";
import LoginPage from "../sections/LoginPage";
import NotFoundPage from "../sections/NotFoundPage";
import ProductPage from "../sections/ProductPage";
import ProductsPage from "../sections/ProductsPage";
import RegisterPage from "../sections/RegisterPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/login" element={< LoginPage/>}/>
        <Route exact path="/register" element={< RegisterPage/>}/>
        <Route exact path="/account" element={< AccountPage/>}/>
        <Route exact path="/products" element={< ProductsPage/>}/>
        <Route exact path="/product/:productId" element={< ProductPage/>}/>
        <Route exact path="/admin/users" element={< UsersPage/>}/>

        <Route path="*" element={< NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}
