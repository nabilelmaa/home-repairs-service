"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checkAuthState: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  checkAuthState: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkAuthState = () => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  };

  const login = () => {
    setIsAuthenticated(true);
    // router.push("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    // router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, checkAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
