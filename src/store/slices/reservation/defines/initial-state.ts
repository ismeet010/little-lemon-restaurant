import { ReservationData } from "../../../defines/reservation/reservation.data";

export interface ReservationState {
  reservations: ReservationData[];
  upcomingRes: ReservationData[];
  loading: boolean;
  error: string | null;
}

export const initialReservationState: ReservationState = {
  reservations: [],
  upcomingRes:[],
  loading: false,
  error: null,
};
