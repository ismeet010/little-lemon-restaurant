import { styled } from "@mui/material/styles";
import { Box, TextField, Button, Typography } from "@mui/material";

export const ReservationContainer = styled(Box)({
  maxWidth: "550px",
  margin: "0 auto",
  padding: "60px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

export const FormField = styled(Box)({
  display: "flex",
  gap: "16px",
  marginBottom: "16px",
});

export const SubmitButton = styled(Button)({
  width: "100%",
  padding: "12px 0",
});

export const ErrorText = styled(Typography)({
  color: "red",
  marginBottom: "16px",
});
