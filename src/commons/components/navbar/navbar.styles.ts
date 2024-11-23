import { styled } from "@mui/system";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";

// Header Container
export const Header = styled("header")({
  width: "100vw",
  borderBottom: "20px solid #495e57",
  paddingLeft : '30px',
  paddingRight : '30px'
});

// Menu Icon (Hamburger icon for mobile)
export const MenuIconStyled = styled(IconButton)(({ theme }) => ({
  color: "black",
  fontSize: "30px",
  display: "block", // Visible on mobile
}));

// Drawer for the side menu (mobile view)
export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    top: 0,
    right: 0,
    width: "250px", // Width of the drawer
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: "20px",
    boxShadow: "none",
    transition: "transform 0.3s ease-in-out",
  },
}));

// Close Button in the Drawer
export const CloseButtonStyled = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  fontSize: "30px",
  color: "#495e57",
}));

// Menu List in the Drawer
export const MenuListStyled = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "20px",
}));

// Menu Item for the Drawer
export const MenuItemStyled = styled(ListItem)(({ theme }) => ({
  fontSize: "20px",
  color: "#495e57",
  marginBottom: "1rem",
  textDecoration: "none",
  "& a": {
    color: "#495e57",
    textDecoration: "none",
  },
}));

// Styling for Navigation Links in Desktop View
export const MenuListDesktop = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

// When on mobile, hide the menu by default
export const MenuListMobile = styled(Box)({
  display: "none", // Hidden by default
  "@media (max-width: 768px)": {
    display: "flex", // Shown on mobile
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#FFFFFF",
    padding: "20px",
  },
});
