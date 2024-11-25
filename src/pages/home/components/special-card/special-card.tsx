import React from "react";
import type { FC } from "react";
import { MotorcycleIcon } from "../../../../commons/icons/motorcycle";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { LButton, LCardHeader, LSpecialCard } from "./special-card.styles";

interface IEntry {
  imgSrc: string;
  imgAlt: string;
  name: string;
  price: string;
  description: string;
}

interface ISpecialCard {
  entry: IEntry;
}

const SpecialCard: FC<ISpecialCard> = ({ entry }) => {
  return (
    <LSpecialCard>
      <CardActionArea>
        <CardMedia
          component="img"
          image={entry.imgSrc}
          alt={entry.imgAlt}
          height="250"
        />
        <CardContent>
          <LCardHeader>
            <Typography variant="h6">{entry.name}</Typography>
            <Typography variant="h6">{entry.price}</Typography>
          </LCardHeader>
          <Typography variant="body2">{entry.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ marginTop: "auto" }}>
        <LButton size="small" href="little-lemon-restaurant/order-online">
          <Typography>Order a delivery</Typography>
        </LButton>
        <MotorcycleIcon fill={"#495e57"} />
      </CardActions>
    </LSpecialCard>
  );
};

export { SpecialCard };
