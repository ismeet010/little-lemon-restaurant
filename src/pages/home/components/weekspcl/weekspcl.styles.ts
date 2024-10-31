import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const WspContainer = styled(Box)({
  display: "flex",
 justifyContent: "center"
});

export const MaxWidthContainer = styled(Box)({
  maxWidth: "80%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
flexDirection: "column"
});

export const ContainerHeader = styled(Box)({
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1rem"
})

export const ContainerBody = styled(Box)({
     display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: "30px",
    columnGap: "100px"

})