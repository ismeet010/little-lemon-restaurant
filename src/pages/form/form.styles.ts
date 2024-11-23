import { styled } from "@mui/material/styles";
import { Box, TextField, Typography, Button } from "@mui/material";

export const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9f9f9", // Light background
  padding: "16px",
});

export const FormTitle = styled(Typography)({
  marginBottom: "24px",
  color: "#333", // Dark text
  fontWeight: "bold",
  textAlign: "center",
});

export const FormFields = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  maxWidth: "400px",
});

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px", // Rounded corners
    backgroundColor: "#fff", // White input background
  },
  "& .MuiInputLabel-root": {
    color: "#777", // Grey label text
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ddd", // Light border
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#888", // Slightly darker border on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1976d2", // Blue border on focus
  },
});

export const ErrorText = styled(Typography)({
  color: "#d32f2f", // Red for errors
  fontSize: "0.875rem",
  textAlign: "center",
  marginTop: "8px",
});

export const StyledButton = styled(Button)({
  marginTop: "16px",
  padding: "12px",
  width: "100%",
  maxWidth: "400px",
  borderRadius: "8px", // Rounded corners
  fontWeight: "bold",
  textTransform: "uppercase",
  backgroundColor: "#1976d2", // Primary blue color
  color: "#fff", // White text
  "&:hover": {
    backgroundColor: "#115293", // Darker blue on hover
  },
});
