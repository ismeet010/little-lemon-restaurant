import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchReservations, createReservation, updateReservation, deleteReservation, getUpcomingReservations } from "../../thunks/reservation/reservation.ts";
import { ReservationData } from "../../defines/reservation/reservation.data";
import { initialReservationState } from "./defines/initial-state";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: initialReservationState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Reservations
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action: PayloadAction<ReservationData[]>) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        // Safely access the payload, which may be a string or undefined
        state.error = action.payload ?? 'Failed to fetch reservations.';
      })
      .addCase(getUpcomingReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcomingReservations.fulfilled, (state, action: PayloadAction<ReservationData[]>) => {
        state.loading = false;
        state.upcomingRes = action.payload;
      })
      .addCase(getUpcomingReservations.rejected, (state, action) => {
        state.loading = false;
        // Safely access the payload, which may be a string or undefined
        state.error = action.payload ?? 'Failed to fetch reservations.';
      })
      // Create Reservation
      .addCase(createReservation.fulfilled, (state, action: PayloadAction<ReservationData>) => {
        state.reservations.push(action.payload);
      })
      // Update Reservation
      .addCase(updateReservation.fulfilled, (state, action: PayloadAction<ReservationData>) => {
        const index = state.reservations.findIndex((r) => r._id === action.payload._id);
        if (index !== -1) state.reservations[index] = action.payload;
      })
  },
});

export const { clearError } = reservationSlice.actions;

export default reservationSlice.reducer;
