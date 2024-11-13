import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import {
  ReservationContainer,
  // FormField,
  // SubmitButton,
  // ErrorText,
} from "./reservation.styles";
import { ReservationContent } from "./reservation-content";

const Reservation: React.FC = () => {
  // const [hour, setHour] = useState("");
  // const [minute, setMinute] = useState("00");
  // const [period, setPeriod] = useState("AM");
  // const [error, setError] = useState("");

  // const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  // const minutes = ["00", "30"];
  // const periods = ["AM", "PM"];

  // const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setHour(event.target.value);
  // };

  // const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMinute(event.target.value);
  // };

  // const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPeriod(event.target.value);
  // };

  // const validateTime = () => {
  //   const hourNum = parseInt(hour);

  //   if (
  //     period === "AM" &&
  //     (hourNum < 11 || (hourNum === 12 && minute === "00"))
  //   ) {
  //     setError("Restaurant opens from 11:00 AM.");
  //   } else if (period === "PM" && hourNum === 12 && minute === "30") {
  //     setError("Restaurant closes at 11:00 PM.");
  //   } else if (period === "AM" && hourNum === 12) {
  //     setError("12:00 AM is outside of restaurant hours.");
  //   } else {
  //     setError("");
  //   }
  // };

  // useEffect(() => {
  //   validateTime();
  // }, [hour, minute, period]);

  // const handleSubmit = () => {
  //   if (!error) {
  //     alert(`Reservation made for ${hour}:${minute} ${period}`);
  //   }
  // };

  return (
    <ReservationContainer>
      <ReservationContent />
    </ReservationContainer>
  );
};

export { Reservation };
