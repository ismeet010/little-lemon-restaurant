import { AppDispatch } from "../../store";
import {
  setLoading,
  setError,
  setUsers,
  setCurrentUser,
  updateUser,
  deleteUser,
} from "../../slices/user/user.slices";
import {
  fetchUsers,
  fetchUserByFirebaseUid,
  updateUserDetails,
  deleteUserByFirebaseUid,
} from "./user.services";
import { User } from "../../defines/user/user.data";

export const fetchAllUsers = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading({ type: "users", loading: true }));
  try {
    const users = await fetchUsers();
    dispatch(setUsers(users));
  } catch (error: any) {
    dispatch(setError({ type: "users", error: error.message }));
  } finally {
    dispatch(setLoading({ type: "users", loading: false }));
  }
};

export const fetchCurrentUser = (firebaseUid: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading({ type: "currentUser", loading: true }));
  try {
    const user = await fetchUserByFirebaseUid(firebaseUid);
    dispatch(setCurrentUser(user));
  } catch (error: any) {
    dispatch(setError({ type: "currentUser", error: error.message }));
  } finally {
    dispatch(setLoading({ type: "currentUser", loading: false }));
  }
};

export const updateUserThunk = (user: User) => async (dispatch: AppDispatch) => {
  dispatch(setLoading({ type: "users", loading: true }));
  try {
    const updatedUser = await updateUserDetails(user);
    dispatch(updateUser(updatedUser));
  } catch (error: any) {
    dispatch(setError({ type: "users", error: error.message }));
  } finally {
    dispatch(setLoading({ type: "users", loading: false }));
  }
};

export const deleteUserThunk = (firebaseUid: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading({ type: "users", loading: true }));
  try {
    await deleteUserByFirebaseUid(firebaseUid);
    dispatch(deleteUser(firebaseUid));
  } catch (error: any) {
    dispatch(setError({ type: "users", error: error.message }));
  } finally {
    dispatch(setLoading({ type: "users", loading: false }));
  }
};
