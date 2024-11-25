import React, { createContext, useState, useEffect } from "react";
import { loginWithGoogle, logout, observeAuthState } from "./authService";

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);

  // Use `observeAuthState` to track user authentication
  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!user,
        user,
        loginWithGoogle: async () => {
          await loginWithGoogle();
        },
        logout: async () => {
          await logout();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
