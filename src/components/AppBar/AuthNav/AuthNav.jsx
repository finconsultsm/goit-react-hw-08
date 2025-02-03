import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import { getUser } from "../../../redux/auth/selectors";

const UserMenu = ({ handleLogout, user }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 2,
        }}
      >
        <Typography textAlign="center">{user.name}</Typography>
        <Typography textAlign="center" variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      </Box>
      <MenuItem onClick={handleLogout}>
        <Typography>Logout</Typography>
      </MenuItem>
    </>
  );
};

const AuthMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <MenuItem onClick={() => navigate("/login")}>
        <Typography>Login</Typography>
      </MenuItem>
      <MenuItem onClick={() => navigate("/register")}>
        <Typography>Register</Typography>
      </MenuItem>
    </>
  );
};

export const AuthNav = ({
  anchorElUser,
  handleCloseUserMenu,
  handleOpenUserMenu,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {isLoggedIn ? (
          <UserMenu user={user} handleLogout={handleLogout} />
        ) : (
          <AuthMenu />
        )}
      </Menu>
    </Box>
  );
};
