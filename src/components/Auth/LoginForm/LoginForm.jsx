import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await dispatch(login(values));
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            autoComplete="email"
            fullWidth
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <Field
            as={TextField}
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            autoComplete="current-password"
            fullWidth
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
