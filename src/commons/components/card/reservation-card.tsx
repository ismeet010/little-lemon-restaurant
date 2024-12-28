import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

interface ReservationCardProps {
  reservationDate: string;
  guests: number;
  occasion?: string;
  // status: "pending" | "confirmed" | "cancelled";
  // onEdit?: () => void;
  onDelete?: () => void;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  reservationDate,
  guests,
  occasion,
  // status,
  // onEdit,
  onDelete,
}) => {
  const reservationTime = new Date(reservationDate);
  const currentTime = new Date();
  const isEditable =
    reservationTime.getTime() - currentTime.getTime() > 60 * 60 * 1000; // Check if > 1 hour from now

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Reservation Details
        </Typography>
        <Typography variant="body1">
          <strong>Date & Time:</strong> {reservationTime.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          <strong>Guests:</strong> {guests}
        </Typography>
        {occasion && (
          <Typography variant="body1">
            <strong>Occasion:</strong> {occasion}
          </Typography>
        )}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {/* <Grid item>
            <Button
              variant="outlined"
              color="primary"
              disabled={!isEditable}
              onClick={onEdit}
            >
              Edit
            </Button>
          </Grid> */}
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              disabled={!isEditable}
              onClick={onDelete}
            >
              Cancel Reservation
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { ReservationCard };
