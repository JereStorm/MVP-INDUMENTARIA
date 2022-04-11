import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

const userCredentials = {};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = UseAuth();
  return (
    <div>
      <h1>LoginPage</h1>
      <button
        onClick={() => {
          login(userCredentials);
          if (location.state) {
            navigate(location.state);
          }
        }}
      >
        Iniciar Secion
      </button>
    </div>
  );
}
