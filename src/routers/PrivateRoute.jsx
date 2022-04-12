import UseAuth from "../auth/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import routes from "../helpers/Routes";

const PrivateRoute = ({ hasRole: role, children }) => {
  const location = useLocation();

  const { hasRole, isLogged } = UseAuth();

  //If exist role and role has bad ...
  if (role && !hasRole(role)) {
    return <Navigate to={routes.login} />;
  }

  if (!isLogged())
    return <Navigate to={routes.login} state={location.pathname} />;

  return children;
};

export default PrivateRoute;
