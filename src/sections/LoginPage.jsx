import React from "react";
import UseAuth from "../auth/UseAuth";

const userCredentials = {};

export default function LoginPage() {
  const { login } = UseAuth();
  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials)}>Iniciar Secion</button>
    </div>
  );
}
