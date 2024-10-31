import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeroContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#495e57",
  paddingTop: "1.875rem",
  paddingBottom: "1rem",
});

export const MaxWidthContainer = styled(Box)({
  maxWidth: "80%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
});

export const HeroContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "20px",
  gap: "1rem",
});

export const HeroHeading = styled(Typography)({
  color: "#f4ce14",
});

export const HeroSubheading = styled(Typography)({
  color: "white",
});

export const HeroParagraph = styled(Typography)({
  color: "white",
});

export const HeroButton = styled(Button)({
  backgroundColor: "#f4ce14",
  "&:hover": {
    backgroundColor: "#f4ce14",
  },
});

export const HeroImage = styled("img")({
  height: "24rem",
  marginBottom: "-4.375rem",
  objectFit: "cover",
  maxWidth: "95%",
  padding: "20px",
  borderRadius: "2rem",
});
