import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ComButton = styled(Button)({
    backgroundColor: '#f4ce14',
    border: '0.2rem solid #f4ce14',
    borderRadius: '1rem',
    color: '#495e57',
    fontWeight: '600',
    textTransform: "uppercase",
    padding: '0.5rem 0.75rem',
    marginTop: "10px",
    /* transition: background,border,color .5s; */
    width: '180px',
    "&:hover": {
    border: '0.2rem solid #f4ce20',
    boxShadow: "0 4px 10px rgba(25, 25, 25, 0.7)"
    }
})

export const ComTitle = styled(Typography)({
  marginBottom: "16px",
  fontWeight: "bold",
  fontSize: "2.5rem",
  color: "#f4ce14",
  paddingTop: "10px"
});

export const ComContainer= styled(Box)({
  maxWidth: "40rem",
  margin: "0 auto",
  padding: "60px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});
