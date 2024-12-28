import axios from "axios";
import { User } from "../../defines/user/user.data";


const API_URL = "http://localhost:5000";

export const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchUserByFirebaseUid = async (firebaseUid: string): Promise<User> => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/user?firebaseUid=${firebaseUid}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUserDetails = async (user: User): Promise<User> => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}/user`, user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUserByFirebaseUid = async (firebaseUid: string): Promise<void> => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/user`, {
    data: { firebaseUid },
    headers: { Authorization: `Bearer ${token}` },
  });
};
