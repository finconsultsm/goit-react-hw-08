import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { refreshUser } from "../redux/auth/operations";
import { getIsLoggedIn, getIsRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const token = JSON.parse(localStorage.getItem("persist:token"));

  const isRefreshing = useSelector(getIsRefreshing);
  const isLoggedIn = useSelector(getIsLoggedIn) || token.token !== "null";

  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
