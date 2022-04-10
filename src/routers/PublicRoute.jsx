import { Navigate, Route } from "react-router-dom";
import UseAuth from "../auth/UseAuth";
import routes from "../helpers/Routes";

export default function PublicRoute({ children }) {
  // const user = null;

  const { isLogged } = UseAuth();
  console.log(isLogged());

  if (isLogged()) return <Navigate to={routes.home} />;
  return children;
}
