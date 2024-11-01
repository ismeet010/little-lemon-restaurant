import { Box, Card, Button} from "@mui/material";
import { styled } from "@mui/system";

export const LSpecialCard = styled(Card)({
  margin: '5px',
  marginLeft: '10px',
  borderRadius: '5%',
  backgroundColor: 'rgb(232, 225, 225)',
  maxWidth: '300px',
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Ensure elements are spaced out
  "&:hover": {
    boxShadow: "0 0 30px -10px black"
  }
});

export const LCardHeader = styled(Box)({
    justifyContent: "space-between",
    display:"flex",
    flexDirection: "row",
    borderBottom: "0.5px dashed darkgray",
    marginBottom: "0.5rem"
})

export const LButton = styled(Button)({
  marginLeft: '0.1rem',
  textTransform: 'none', // Prevents uppercase text
  color: '#495e57', // Sets the text color
  "&:hover": {
    backgroundColor: '#f0f0f0', // Light grey background on hover
  },
});
