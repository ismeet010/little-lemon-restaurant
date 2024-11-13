import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const MenuContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
  backgroundColor: "#fdfdfd",
});

export const MenuHeading = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
  textAlign: "center",
});

export const MenuSections = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
});

export const MenuCategory = styled(Box)({
  flex: "1 1 350px",
  padding: "15px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
});

export const MenuCategoryHeading = styled(Typography)({
  fontSize: "1.75rem",
  fontWeight: "bold",
  color: "#495e57",
  marginBottom: "10px",
  textAlign: "center",
});
