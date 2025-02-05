import * as React from "react";
import AB from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Navigation } from "./Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contacts",
    path: "/contacts",
    private: true,
  },
];

function AppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavMenu = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AB position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Navigation
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleClickNavMenu={handleClickNavMenu}
              pages={pages}
              isMobile
            />
          </Box>
          <Navigation pages={pages} handleClickNavMenu={handleClickNavMenu} />

          {isLoggedIn ? (
            <UserMenu
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          ) : (
            <AuthNav
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          )}
        </Toolbar>
      </Container>
    </AB>
  );
}
export default AppBar;
