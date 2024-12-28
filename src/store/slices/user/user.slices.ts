import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../defines/user/user.data";
import { initialCurrentUserState, initialUsersState } from "./defines/initial-state";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: initialUsersState,
    currentUser: initialCurrentUserState,
  },
  reducers: {
    setLoading(state, action: PayloadAction<{ type: "users" | "currentUser"; loading: boolean }>) {
      state[action.payload.type].loading = action.payload.loading;
    },
    setError(state, action: PayloadAction<{ type: "users" | "currentUser"; error: string | null }>) {
      state[action.payload.type].error = action.payload.error;
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users.data = action.payload ?? null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser.data = action.payload;
    },
    updateUser(state, action: PayloadAction<User>) {
      const updatedUser = action.payload;
      if (state.users.data) {
        state.users.data = state.users.data.map((user) =>
        user.firebaseUid === updatedUser.firebaseUid ? updatedUser : user
        );
    }
    },
    deleteUser(state, action: PayloadAction<string>) {
      if (state.users.data) {
    state.users.data = state.users.data.filter(
      (user) => user.firebaseUid !== action.payload
    );
  }
    },
  },
});

export const {
  setLoading,
  setError,
  setUsers,
  setCurrentUser,
  updateUser,
  deleteUser,
} = usersSlice.actions;

export default usersSlice.reducer;
