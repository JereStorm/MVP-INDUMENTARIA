import React from "react";
import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import roles from "../helpers/Roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log("USER:", user);
  //-- Login
  const login = (userCredentials) => {
    setUser({ id: 49, role: roles.admin });
  };
  const logout = () => setUser(null);

  //returns t o f if exist user...
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
