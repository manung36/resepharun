import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "@mui/icons-material";

const menus = [
  {
    menu: "Beranda",
    page: "/",
  },
  {
    menu: "Cari Resep",
    page: "/search",
  },
  {
    menu: "Tentang Situs",
    page: "/about",
  },
];

const settings = [
  {
    menu: "Profile",
    page: "/profile",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, isLoading] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("berhasil log out");
    } catch (err) {
      console.log(err);
      console.log("gagal log out");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <SoupKitchenOutlinedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Button}
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "text",
                textTransform: "none",
              }}
            >
              Resep Harun Azis
            </Typography>

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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menus.map((menu) => (
                  <MenuItem
                    key={menu.menu}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(menu.page);
                    }}
                  >
                    <Typography textAlign="center">{menu.menu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <SoupKitchenOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "text",
                textDecoration: "none",
              }}
            >
              Resep Masakan Terkini
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 2,
                marginLeft: 8,
              }}
            >
              {menus.map((menu) => (
                <Button
                  key={menu.menu}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(menu.page);
                  }}
                  sx={{
                    my: 3,
                    display: "block",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                >
                  {menu.menu}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {!user ? (
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  sx={{
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                  endIcon={<Login />}
                >
                  Login
                </Button>
              ) : (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Profile "
                      src="https://i.pravatar.cc/150?img=68"
                    />
                  </IconButton>
                </Tooltip>
              )}

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
                {user && (
                  <MenuItem>
                    <Typography> {user.email}</Typography>
                  </MenuItem>
                )}

                {settings.map((setting) => (
                  <MenuItem
                    key={setting.menu}
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate(setting.page);
                    }}
                  >
                    <Typography textAlign="center">{setting.menu}</Typography>
                  </MenuItem>
                ))}

                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    handleSignOut();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
export default Navbar;
