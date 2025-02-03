import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { getIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser()).unwrap();
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegistrationPage} redirectTo="/" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo={"/login"} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
