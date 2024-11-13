import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const MenuItemContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Aligns items vertically in the center
  marginBottom: "10px",
});

export const MenuItemName = styled(Typography)({
  fontWeight: "bold",
  color: "#333",
});

export const MenuItemPrice = styled(Typography)({
  color: "#495e57",
  fontWeight: "bold",
  minWidth: "50px", // Fixed width to keep prices aligned
  textAlign: "left", // Aligns the price to the left within the box
  marginLeft: "10px",
});

export const MenuItemDesc = styled(Typography)({
  fontSize: "0.9rem",
  color: "#6c757d",
  marginTop: "4px",
});
