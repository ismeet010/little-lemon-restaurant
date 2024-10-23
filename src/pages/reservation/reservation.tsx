import React, { useState } from "react";
import "./reservation.css";
import { ReservationContent } from "./reservation-content";

// Define form data state type (same as in ReservationContent)
interface FormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const Reservation: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState<string>(""); // State to store booking details
  const availableTimes: string[] = ["12", "2", "4", "6", "8"]; // List of available times

  // Define a function to handle form data in Reservation
  const handleReservation = (formData: FormData) => {
    // Perform actions with the form data in Reservation
    console.log("Form data in Reservation:", formData);
    // Update booking details state
    setBookingDetails(`Your booking for ${formData.date} has been successful!`);
  };

  return (
    <div className="reserDiv">
      <h2 className="white-bold">Table Reservation</h2>
      <ReservationContent
        availableTimes={availableTimes}
        onReservation={handleReservation}
      />

      <div>{bookingDetails}</div>
    </div>
  );
};

export { Reservation };
