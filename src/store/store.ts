import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user/user.slices"; // Import the users slice reducer
import reservationReducer from "./slices/reservation/reservation.slice"; // Import the users slice reducer
import orderReducer from "./slices/order/order.slice"; // Import the users slice reducer

const store = configureStore({
  reducer: {
    users: usersReducer,
    reservation: reservationReducer,
     order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
