import { Menu, MenuItem, Typography, Box, Button } from "@mui/material";
import { getIsLoggedIn } from "../../../redux/auth/selectors";
import { useSelector } from "react-redux";

export const Navigation = ({
  anchorElNav,
  handleCloseNavMenu,
  handleClickNavMenu,
  pages,
  isMobile,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const filteredPages = pages.filter((page) => !page.private || isLoggedIn);

  if (isMobile)
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {filteredPages.map((page) => (
          <MenuItem
            key={page.name}
            onClick={() => handleClickNavMenu(page.path)}
          >
            <Typography sx={{ textAlign: "center" }}>{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    );

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {filteredPages.map((page) => (
        <Button
          key={page.name}
          onClick={() => handleClickNavMenu(page.path)}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};
