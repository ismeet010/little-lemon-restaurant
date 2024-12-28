import React, { useEffect, useContext, useState } from "react";
import { ReservationContainer } from "./reservation.styles";
import { ReservationContent } from "./reservation-content";
import { Box, Typography } from "@mui/material";
import { ReservationCard } from "../../commons/components/card/reservation-card";
import { AuthContext } from "../../commons/context/AuthContext";
import {
  deleteReservation,
  fetchReservations,
  getUpcomingReservations,
} from "../../store/thunks/reservation/reservation";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ReservationData } from "../../store/defines/reservation/reservation.data";

const Reservation: React.FC = () => {
  const [upcomingReservations, setUpcomingReservations] = useState<any[]>([]);
  const { isLoggedIn, user } = useContext(AuthContext);
  const dispatch = useDispatch<AppDispatch>();
  const [editReservationData, setEditReservationData] =
    useState<ReservationData>();

  // Accessing reservations state from Redux store
  const { upcomingRes } = useSelector(
    (state: RootState) => state.reservation // Adjust based on your store
  );

  useEffect(() => {
    if (isLoggedIn && user?.uid) {
      //API call to fetch upcoming reservations
      dispatch(getUpcomingReservations(user?.uid));
    }
  }, [isLoggedIn, dispatch, user]);

  useEffect(() => {
    if (upcomingRes) {
      setUpcomingReservations(upcomingRes);
    }
  }, [upcomingRes]);

  // // Handle Edit functionality
  // const handleEdit = (reservation: any) => {
  //   setEditReservationData(reservation); // Pre-fill form with selected reservation data
  // };

  // Handle Delete functionality
  // const handleDelete = (reservationId: string) => {
  //   if (!user?.uid) {
  //     alert("You must be logged in to delete a reservation!");
  //     return;
  //   }
  //   if (window.confirm("Are you sure you want to delete this reservation?")) {
  //     dispatch(
  //       deleteReservation({
  //         reservationId,
  //         firebaseUid: user.uid, // Include firebaseUid in the payload
  //       })
  //     );
  //   }
  // };
  const handleDelete = async (reservationId: string) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await dispatch(
          deleteReservation({ reservationId, firebaseUid: user?.uid })
        ).unwrap(); // Ensure promise resolution
        // Fetch updated reservations
        await dispatch(getUpcomingReservations(user?.uid)).unwrap();
        alert("Reservation deleted successfully!");
      } catch (error) {
        alert(`Error deleting reservation: ${error}`);
      }
    }
  };

  // // Handle form submit for editing reservation
  // const handleEditSubmit = (updatedData: any) => {
  //   if (editReservationData) {
  //     dispatch(
  //       updateReservation({
  //         reservationId: editReservationData._id,
  //         updatedData,
  //       })
  //     );
  //     setEditReservationData(null); // Reset form data after submitting
  //   }
  // };

  return (
    <ReservationContainer>
      <ReservationContent
      // onFormSubmit={handleEditSubmit}
      // reservationData={editReservationData}
      />
      {upcomingReservations.length > 0 ? (
        <Box>
          <Typography>Upcoming Reservations</Typography>
          {upcomingReservations.map((reservation) => (
            <ReservationCard
              key={reservation._id}
              reservationDate={reservation.reservationDate}
              guests={reservation.guests}
              occasion={reservation.occasion}
              // onEdit={() => handleEdit(reservation)}
              onDelete={() => handleDelete(reservation._id)}
            />
          ))}
        </Box>
      ) : (
        <Typography>No upcoming reservations found.</Typography>
      )}
    </ReservationContainer>
  );
};

export { Reservation };
