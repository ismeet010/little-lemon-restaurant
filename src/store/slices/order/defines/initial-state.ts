import { OrderData } from "../../../defines/order/order.data";

export interface OrderState {
  orders: OrderData[];
  loading: boolean;
  error: string | null;
}

export const orderInitialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};
