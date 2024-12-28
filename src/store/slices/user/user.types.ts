import { ApiState } from "../../defines/data-descriptor";
import { User } from "../../defines/user/user.data";

export interface UsersState {
  users: ApiState<User[]>;
  currentUser: ApiState<User>;
}
