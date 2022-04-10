import UseAuth from "../auth/UseAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ hasRole: role, children }) => {
  const { user } = UseAuth();
  //If exist role...
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  if (!user) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
