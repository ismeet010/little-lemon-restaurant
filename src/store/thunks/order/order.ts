import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "./order.services";

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (firebaseId: string) => {
    const orders = await OrderService.getAllOrders(firebaseId);
    return orders;
  }
);

// Fetch a specific order by ID
export const fetchOrderById = createAsyncThunk(
  "order/fetchOrderById",
  async (
    { orderId, firebaseId }: { orderId: string; firebaseId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await OrderService.getOrderById(orderId, firebaseId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch order.");
    }
  }
);

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData: {
    firebaseId: string;
    items: { name: string; quantity: number; price: number }[];
    totalPrice: number;
  }) => {
    const newOrder = await OrderService.createOrder(orderData);
    return newOrder;
  }
);

export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async ({ id, firebaseId }: { id: string; firebaseId: string }) => {
    await OrderService.deleteOrder(id, firebaseId);
    return id;
  }
);
