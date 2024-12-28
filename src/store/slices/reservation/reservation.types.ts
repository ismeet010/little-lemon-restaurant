export type ReservationThunkPayload = {
  firebaseUid: string;
  reservationDate?: string;
  guests?: number;
  occasion?: string;
  reservationId?: string;
};
