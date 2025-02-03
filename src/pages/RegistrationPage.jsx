import { RegisterForm } from "../components/Auth/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Register Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you already have an account, please <Link to="/login">login</Link>.
      </Typography>
      <RegisterForm />
    </Container>
  );
};

export default RegistrationPage;
