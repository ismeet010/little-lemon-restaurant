import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";

export const FooterContainer = styled(Box)({
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  padding: "32px 16px",
  left: 0,
  bottom: 0,
  width: '100vw'
});

export const FooterGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  textAlign: "left",
  width: "75%",
  margin: "0 auto", 
});

export const FooterItem = styled(Box)({
  flex: "1 1 200px",
  marginRight: "20px",
  '&:last-child': {
    marginRight: 0,
  },
  '@media (max-width: 600px)': {
    marginRight: 0,
    marginBottom: '16px',
  }
});

export const FooterTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "8px",
});

export const FooterLink = styled(Link)({
  color: "#6c757d",
  textDecoration: "none",
  display: "block",
  marginBottom: "8px",
  "&:hover": {
    color: "#ffffff",
  },
});

export const SocialLinksContainer = styled(Box)({
  display: "flex",
  flexDirection: "column", // Arrange icons vertically
  gap: "8px", // Space between icons
  marginLeft: "-25px"
});

export const SocialIconButton = styled(IconButton)({
  color: "#6c757d",
  display: 'flex',
  justifyContent: 'space-evenly',
  "&:hover": {
    color: "#495e57",
  },
});

export const FooterLogo = styled("img")({
  height: "12rem",
  objectFit: "cover",
  maxWidth: "95%",
  "&:hover": {
    boxShadow: "0 4px 10px rgba(25, 25, 25, 0.7)"
    }
});

