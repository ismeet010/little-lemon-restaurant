import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ComButton = styled(Button)({
    backgroundColor: '#f4ce14',
    border: '0.2rem solid #f4ce14',
    borderRadius: '2rem',
    color: '#495e57',
    fontWeight: '600',
    padding: '0.5rem 0.75rem',
    /* transition: background,border,color .5s; */
    width: '180px',
    "&:hover": {
    border: '0.2rem solid #f4ce20',
    boxShadow: "0 4px 10px rgba(25, 25, 25, 0.7)"
    }
})
