// import { Navigate, Route } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

// const PrivateRoute = (props) => {
//   // const user = null;
//   console.log(props);
//   const { user } = UseAuth();
//   console.log(user);

//   if (!user) return <Navigate to="/login" />;
//   return <Route {...props} />;
// };

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const user = false;
  const { user } = UseAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};
export default PrivateRoute;
