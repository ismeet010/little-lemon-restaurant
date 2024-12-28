import { FormControl, TextField } from "@mui/material";
import { useState, ChangeEvent, FormEvent, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ComButton, ComTitle } from "../../commons/style/style";
import { useNavigate } from "react-router-dom"; // For navigation
import { AuthContext } from "../../commons/context/AuthContext";
import { useDispatch } from "react-redux";
import {
  createReservation,
  getUpcomingReservations,
  updateReservation,
} from "../../store/thunks/reservation/reservation";
import {
  CreateReservationPayload,
  // ReservationData,
} from "../../store/defines/reservation/reservation.data";
import { AppDispatch } from "../../store/store";

// interface IReservationContentProps {
//   // reservationData?: ReservationData; // Data passed for editing, if any
//   // onFormSubmit?: () => void; // Callback after successful submission
// }

const ReservationContent = () =>
  // {reservationData,
  // onFormSubmit}
  {
    const [formData, setFormData] = useState<CreateReservationPayload>({
      reservationDate: "",
      guests: 1,
      occasion: "",
    });
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user);

    // Redux dispatch and state
    const dispatch = useDispatch<AppDispatch>(); // Ensure correct typing

    // // Pre-fill form data when editing
    // useEffect(() => {
    //   if (reservationData) {
    //     setFormData(reservationData);
    //     setStartDate(new Date(reservationData.reservationDate));
    //   }
    // }, [reservationData]);

    // Handler for TextField inputs
    const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isLoggedIn || !user?.uid) {
        // Redirect to login and save current path
        alert("You need to log in to make a reservation!");
        localStorage.setItem(
          "redirectAfterLogin",
          "/little-lemon-restaurant/reservation"
        );
        navigate("/little-lemon-restaurant/login");
        return;
      }

      // if (reservationData && reservationData._id) {
      //   // Construct the payload
      //   const payload = {
      //     reservationId: reservationData._id,
      //     firebaseUid: user.uid, // Pass user ID
      //     updatedData: formData, // Include the form data with changes
      //   };
      //   try {
      //     await dispatch(updateReservation(payload)).unwrap(); // Dispatch update action
      //     dispatch(getUpcomingReservations(user?.uid)).unwrap();
      //     alert("Reservation updated successfully!");
      //   } catch (error) {
      //     alert(`Error updating reservation: ${error}`);
      //   }
      // } else {
      // Create mode: Dispatch createReservation action
      const payload = { ...formData, firebaseUid: user.uid };
      try {
        await dispatch(createReservation(payload)).unwrap();
        await dispatch(getUpcomingReservations(user?.uid)).unwrap();
        alert("Reservation created successfully!");
      } catch (error) {
        alert(`Error creating reservation: ${error}`);
      }
      // }

      // // Call the onFormSubmit callback if provided
      // if (onFormSubmit) {
      //   onFormSubmit();
      // }
    };

    return (
      <form onSubmit={handleSubmit}>
        <ComTitle variant="h4" gutterBottom>
          Make a Reservation
        </ComTitle>

        <FormControl fullWidth margin="normal">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              if (date) {
                setStartDate(date); // Update startDate
                setFormData((prevData) => ({
                  ...prevData,
                  reservationDate: date.toISOString(), // Update reservationDate
                }));
              }
            }}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeFormat="h:mm aa"
            showTimeSelect
            filterTime={(time) => {
              const selectedTime = time.getHours() * 60 + time.getMinutes();
              return selectedTime >= 660 && selectedTime <= 1380; // Between 11:00 AM and 11:00 PM
            }}
            customInput={
              <TextField
                fullWidth
                variant="outlined"
                label="Reservation Date and Time"
              />
            }
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            label="Number of Guests"
            type="number"
            id="guests"
            inputProps={{ min: 2, max: 15 }}
            value={formData.guests}
            onChange={handleTextFieldChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Occasion"
            type="text"
            id="occasion"
            value={formData.occasion}
            onChange={handleTextFieldChange}
          />
        </FormControl>
        <ComButton fullWidth variant="contained" type="submit">
          Reserve!!
        </ComButton>
      </form>
    );
  };

export { ReservationContent };
