import { createSlice } from "@reduxjs/toolkit";
import { OrderData } from "../../defines/order/order.data"; // Define the data structure
import { createOrder, fetchOrders } from "../../thunks/order/order";

interface OrderState {
  orders: OrderData[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch orders
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch orders.";
    });

    // Create order
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
    });
  },
});

export default orderSlice.reducer;
