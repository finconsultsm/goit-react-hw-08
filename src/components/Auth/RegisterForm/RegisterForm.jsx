import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const RegisterForm = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await dispatch(register(values));
      // navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            margin="normal"
            autoComplete="name"
            fullWidth
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
          />
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
            autoComplete="new-password"
            fullWidth
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Field
            as={TextField}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            autoComplete="new-password"
            fullWidth
            error={touched.confirmPassword && !!errors.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
