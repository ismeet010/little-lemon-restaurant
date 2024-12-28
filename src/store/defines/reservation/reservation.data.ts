import { Key } from "react";

export interface ReservationData {
  _id: string;
  firebaseUid: string;
  reservationDate: string;
  guests: number;
  occasion?: string;
}

export interface CreateReservationPayload {
  reservationDate: string;
  guests: number;
  occasion?: string;
}

export interface UpdateReservationPayload {
  reservationId: string;
  reservationDate?: string;
  guests?: number;
  occasion?: string;
}

export interface ReservationResponse {
  message: string;
  reservation: ReservationData;
}

export interface ReservationsListResponse {
  message: string;
  reservations: ReservationData[];
}
