import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

const OrderService = {
  getAllOrders: async (firebaseId: string) => {
    const response = await axios.get(`${API_BASE_URL}/orders`, {
      params: { firebaseId },
    });
    return response.data;
  },

  getOrderById: async (id: string, firebaseId: string) => {
    const response = await axios.get(`${API_BASE_URL}/orders/${id}`, {
      params: { firebaseId },
    });
    return response.data;
  },

  createOrder: async (orderData: {
    firebaseId: string;
    items: { name: string; quantity: number; price: number }[];
    totalPrice: number;
  }) => {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  },

  deleteOrder: async (id: string, firebaseId: string) => {
    const response = await axios.delete(`${API_BASE_URL}/orders/${id}`, {
      params: { firebaseId },
    });
    return response.data;
  },
};

export default OrderService;
