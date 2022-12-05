import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "services/api";

type SignInRequestData = {
  email: string;
  password: string;
};

type User = {
  avatar: string;
  name: string;
  username: string;
};

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInRequestData) => Promise<void>;
}

interface LoginDataResponse {
  "access-token": string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "loomiapp.token": token } = parseCookies();

    if (token) {
      fetchUserData();
    }
  }, []);

  async function signIn({ email, password }: SignInRequestData) {
    const loginResponse = await api.get<LoginDataResponse>("/login", {
      auth: {
        username: email,
        password,
      },
    });

    const { "access-token": token } = loginResponse.data;

    setCookie(undefined, "loomiapp.token", token, {
      maxAge: 60 * 60 * 1, //1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    fetchUserData();

    Router.push("/dashboard");
  }

  async function fetchUserData() {
    const userDataResponse = await api.get<User>("/me");

    const { avatar, name, username } = userDataResponse.data;

    setUser({ avatar, name, username });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
