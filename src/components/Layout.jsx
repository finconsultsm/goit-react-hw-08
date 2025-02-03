import { Outlet, Link } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
