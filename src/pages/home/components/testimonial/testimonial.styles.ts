import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const TestimonialContainer = styled(Box)({
    backgroundColor: '#495e57',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: "1rem"
});

export const MaxWidthContainer = styled(Box)({
    flexDirection: "column"
});

export const TestimonialContent = styled(Box)({
    display: "flex",
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
});

export const Heading = styled(Typography)({
  color: "white",
  fontWeight: "500",
  marginBottom: "1rem"
})



