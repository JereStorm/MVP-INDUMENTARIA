import UseAuth from "../auth/UseAuth";
import { Navigate } from "react-router-dom";
import routes from "../helpers/Routes";

const PrivateRoute = ({ hasRole: role, children }) => {
  const { hasRole, isLogged } = UseAuth();
  //If exist role...
  if (role && !hasRole(role)) {
    return <Navigate to={routes.home} />;
  }

  if (!isLogged()) return <Navigate to={routes.login} />;
  return children;
};

export default PrivateRoute;
