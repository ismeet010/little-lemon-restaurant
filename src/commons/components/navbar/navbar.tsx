import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Header,
  MenuIconStyled,
  DrawerStyled,
  CloseButtonStyled,
  MenuItemStyled,
  MenuListDesktop,
  MenuListMobile,
} from "./navbar.styles";

import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo.png";
import { MenuIcon } from "../../icons/menu";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig"; // Update path if needed

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view
  const navigate = useNavigate();

  // Menu items
  const menuItems = [
    { label: "Home", to: "/little-lemon-restaurant" },
    { label: "About", to: "/little-lemon-restaurant/about" },
    { label: "Menu", to: "/little-lemon-restaurant/menu" },
    { label: "Reservation", to: "/little-lemon-restaurant/reservation" },
    { label: "Order", to: "/little-lemon-restaurant/order-online" },
  ];

  const toggleMenu = () => {
    setActive(!active);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setAnchorEl(null);
    navigate("/little-lemon-restaurant/login");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <img src={logo} alt="logo" width={"150px"} height={"50px"} />
          </Box>

          {/* AppBar for both desktop and mobile */}
          {/* <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF" }}> */}
          <Toolbar sx={{ justifyContent: "space-between", paddingTop: "5px" }}>
            {/* Desktop Navbar */}
            {!isMobile && (
              <MenuListDesktop>
                {menuItems.map((item) => (
                  <MenuItemStyled key={item.label}>
                    <NavLink
                      to={item.to}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "#f4a300" : "#000000", // Highlight active page
                        padding: "10px 20px",
                        display: "inline-block",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </MenuItemStyled>
                ))}
                {user ? (
                  <IconButton
                    onClick={handleMenuOpen}
                    color="inherit"
                    sx={{ marginLeft: "20px" }}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                ) : (
                  <MenuItemStyled>
                    <NavLink
                      to="/little-lemon-restaurant/login"
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "#f4a300" : "#000000",
                        padding: "10px 20px",
                      })}
                    >
                      Login
                    </NavLink>
                  </MenuItemStyled>
                )}
              </MenuListDesktop>
            )}
          </Toolbar>
          {/* </AppBar> */}

          {/* Hamburger menu icon for mobile */}
          {isMobile && (
            <MenuIconStyled onClick={toggleMenu}>
              <MenuIcon />
            </MenuIconStyled>
          )}
        </Box>
      </Header>

      {/* Drawer (Side Menu) for mobile */}
      <DrawerStyled anchor="right" open={active} onClose={toggleMenu}>
        <Box>
          <CloseButtonStyled onClick={toggleMenu}>
            <CloseIcon />
          </CloseButtonStyled>
          <MenuListMobile>
            {menuItems.map((item) => (
              <MenuItemStyled key={item.label}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#f4a300" : "#495e57", // Highlight active page
                    padding: "10px 20px",
                  })}
                  onClick={toggleMenu}
                >
                  {item.label}
                </NavLink>
              </MenuItemStyled>
            ))}
            {user ? (
              <MenuItemStyled>
                <button onClick={toggleMenu}>Profile</button>
              </MenuItemStyled>
            ) : (
              <MenuItemStyled>
                <NavLink
                  to="/little-lemon-restaurant/login"
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#f4a300" : "#495e57",
                    padding: "10px 20px",
                  })}
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </MenuItemStyled>
            )}
          </MenuListMobile>
        </Box>
      </DrawerStyled>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => navigate("/little-lemon-restaurant/profile")}>
          View Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export { Navbar };
