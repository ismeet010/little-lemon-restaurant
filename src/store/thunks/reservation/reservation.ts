import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationService } from "./reservation.services";
import { CreateReservationPayload, ReservationData } from "../../defines/reservation/reservation.data";

const fetchReservations = createAsyncThunk<
  ReservationData[], // Success return type
  string, // Argument type
  { rejectValue: string } // Type of `rejectWithValue`
>(
  "reservation/fetchReservations",
  async (firebaseUid: string, { rejectWithValue }) => {
    try {
      const data = await ReservationService.fetchReservations(firebaseUid);
      return data.reservations as ReservationData[];
    } catch (error) {
        const err= error as any
      return rejectWithValue(err.response.data.message || "Failed to fetch reservations.");
    }
  }
);
const getUpcomingReservations = createAsyncThunk<
  ReservationData[], // Success return type
  string, // Argument type
  { rejectValue: string } // Type of `rejectWithValue`
>(
  "reservation/getUpcomingReservations",
  async (firebaseUid: string, { rejectWithValue }) => {
    try {
      const data = await ReservationService.getUpcomingReservations(firebaseUid);
      return data.reservations as ReservationData[];
    } catch (error) {
        const err= error as any
      return rejectWithValue(err.response.data.message || "Failed to fetch reservations.");
    }
  }
);

// Define async thunk for creating reservation
const createReservation = createAsyncThunk<
  ReservationData, // Success return type
  CreateReservationPayload, // Argument type (form data)
  { rejectValue: string } // Optional reject value type
>(
  "reservation/createReservation",
  async (reservationData: CreateReservationPayload, { rejectWithValue }) => {
    try {
      const response = await ReservationService.createReservation(reservationData);
      return response.data; // assuming response contains the reservation data
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response?.data?.message || "Failed to create reservation");
    }
  }
);
const updateReservation = createAsyncThunk(
  "reservation/updateReservation",
  async (payload: { reservationId: string; firebaseUid: string; updatedData: any }, { rejectWithValue }) => {
    try {
      const { reservationId, firebaseUid, updatedData } = payload;
      const data = await ReservationService.updateReservation({
        reservationId,
        firebaseUid,
        ...updatedData, // Pass other updated fields
      });
      return data.reservation as ReservationData;
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response?.data?.message || "Failed to update reservation.");
    }
  }
);


const deleteReservation = createAsyncThunk(
  "reservation/deleteReservation",
  async (payload: { reservationId: string; firebaseUid: string }, { rejectWithValue }) => {
    try {
      const { reservationId, firebaseUid } = payload;
      await ReservationService.deleteReservation({
        reservationId,
        firebaseUid,
      });
      return reservationId; // Return reservationId to update the state
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response?.data?.message || "Failed to delete reservation.");
    }
  }
);


export {fetchReservations, getUpcomingReservations, createReservation, deleteReservation , updateReservation}
