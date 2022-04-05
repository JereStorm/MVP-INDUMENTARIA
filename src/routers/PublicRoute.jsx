import { Navigate, Route } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

export default function PublicRoute(props) {
  // const user = null;

  const { user } = UseAuth();

  if (user) return <Navigate to="/" />;
  return <Route {...props} />;
}
