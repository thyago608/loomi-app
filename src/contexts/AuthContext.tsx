import { createContext, ReactNode } from "react";

interface AuthContextData {
  isAuthenticated: boolean;
}

export const AuthContext = createContext(
  {} as AuthContextData
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn() {}

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
