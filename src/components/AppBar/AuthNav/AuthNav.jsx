import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/auth/selectors";


export const AuthNav = ({
  anchorElUser,
  handleCloseUserMenu,
  handleOpenUserMenu,
}) => {
  const navigate = useNavigate();
  const user = useSelector(getUser);

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
        <MenuItem onClick={() => navigate("/login")}>
          <Typography>Login</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate("/register")}>
          <Typography>Register</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
