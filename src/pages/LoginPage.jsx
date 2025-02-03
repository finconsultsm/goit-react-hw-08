import { Link } from "react-router-dom";
import { LoginForm } from "../components/Auth/LoginForm/LoginForm";
import { Container, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you don't have an account, please{" "}
        <Link to="/register">register</Link>.
      </Typography>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
