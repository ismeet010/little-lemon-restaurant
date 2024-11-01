import { Avatar, Card as MUICard, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Card = styled(MUICard)({
    padding: '10px',
    margin: '5px',
    marginLeft: '20px',
    borderRadius: '5%',
    backgroundColor: 'white',
    width: '280px',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const CardHeading = styled(Typography)({
    fontSize: '25px',
    fontWeight: '300',
    margin: '10px'
})

export const CardImage = styled(Avatar)({
    width: '130px',
    height: '130px',
    // borderRadius: '50%',
    // alignItems: 'center'
})