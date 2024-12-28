
import { ApiState } from "../../../defines/data-descriptor";
import { User } from "../../../defines/user/user.data";


export const initialUsersState: ApiState<User[]> = {
  data: [],
  loading: false,
  error: null,
};

export const initialCurrentUserState: ApiState<User> = {
  data: null,
  loading: false,
  error: null,
};
