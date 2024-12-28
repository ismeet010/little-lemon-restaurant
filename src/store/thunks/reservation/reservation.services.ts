import axios from "axios";
// import { RESERVATION_API_ENDPOINTS } from "../../defines/reservation/reservation.data";

const API_BASE_URL = "http://localhost:5000";

const ReservationService = {
  fetchReservations: async (firebaseUid: string) => {
    const response = await axios.get(`${API_BASE_URL}/reservation`, {
      params: { firebaseUid },
    });
    return response.data;
  },
  getUpcomingReservations: async (firebaseUid: string) => {
    const response = await axios.get(`${API_BASE_URL}/reservation/upcoming`, {
      params: { firebaseUid },
    });
    return response.data;
  },
  createReservation: async (payload: any) => {
    const response = await axios.post(`${API_BASE_URL}/reservation`, payload);
    return response.data;
  },
 updateReservation: async (payload: { reservationId: string; firebaseUid: string; updatedData: any }) => {
  const { reservationId, firebaseUid, updatedData } = payload;

  const response = await axios.put(
    `${API_BASE_URL}/reservation`, // URL
    {
      firebaseUid, // Include firebaseUid explicitly in the body
      ...updatedData, // Additional updated fields
    },
    {
      params: { reservationId }, // Pass reservationId as a query parameter
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );

  return response.data;
},
deleteReservation: async (payload: { reservationId: string; firebaseUid: string }) => {
  const { reservationId, firebaseUid } = payload;
  const response = await axios.delete(`${API_BASE_URL}/reservation`, {
    params: { reservationId }, // Pass reservationId in query params
    data: { firebaseUid }, // Send firebaseUid in the request body
    headers: {
      "Content-Type": "application/json", // Explicitly set headers if needed
    },
  });
  return response.data;
}
};

export {ReservationService}
