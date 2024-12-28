export interface OrderData {
  _id: string;
  uid: string;
  items: { name: string; quantity: number; price: number }[];
  totalPrice: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}
