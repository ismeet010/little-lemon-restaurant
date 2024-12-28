export interface User {
  firebaseUid: string;
  email: string;
  firstName: string;
  lastName?: string;
  username?: string;
  profilePicture?: string;
  role?: string; // Admin, User, etc.
}

export const UserRole = {
  ADMIN: "admin",
  USER: "user",
};
