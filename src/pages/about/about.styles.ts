import { styled } from "@mui/material/styles";
import { Box, Typography, Card } from "@mui/material";

export const AboutContainer = styled(Box)({
  padding: "32px",
  backgroundColor: "#f9f9f9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const AboutTitle = styled(Typography)({
  marginBottom: "16px",
  fontWeight: "bold",
  fontSize: "2.5rem",
  color: "#f4ce14",
});

export const AboutDescription = styled(Typography)({
  color: "#6c757d",
  marginBottom: "24px",
  lineHeight: "1.8",
  maxWidth: "800px",
});

export const AboutContent = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "24px",
  flexWrap: "wrap",
  gap: "16px",
});

export const AboutImage = styled("img")({
  height: "300px",
  width: "calc(50% - 8px)",
  objectFit: "cover",
  borderRadius: "8px",
  "&:hover": {
    boxShadow: "0 4px 10px rgba(25, 25, 25, 0.7)",
    transform: "scale(1.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
});

// New Styled Card
export const StyledCard = styled(Card)({
  marginBottom: "16px",
  padding: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: "#fff", // Card background
  width: "100%", // Make cards responsive
  maxWidth: "800px", // Limit card width for better layout
});

// Quote Styling
export const Quote = styled(Typography)({
  fontStyle: "italic",
  fontSize: "1.2rem",
  color: "#495e57",
  marginBottom: "8px",
});

export const QuoteAuthor = styled(Typography)({
  textAlign: "right",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "24px",
});
