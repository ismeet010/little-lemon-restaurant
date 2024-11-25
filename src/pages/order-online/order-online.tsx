import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza.",
    price: "$12",
  },
  {
    id: 2,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta.",
    price: "$15",
  },
  { id: 3, name: "Tacos", description: "Mexican soft tacos.", price: "$10" },
];

const OrderPage = () => {
  const [cart, setCart] = useState<Dish[]>([]);

  const handleAddToCart = (dish: Dish) => {
    setCart((prevCart) => [...prevCart, dish]);
    alert(`${dish.name} added to the cart!`);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Order Your Favorite Dishes
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {dishes.map((dish) => (
          <Card key={dish.id} sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h6">{dish.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {dish.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
                {dish.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => handleAddToCart(dish)}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export { OrderPage };
