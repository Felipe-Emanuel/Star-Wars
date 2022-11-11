import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { dataFetch, createSession } from "../../services/dataFetch";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      dataFetch.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    const loggedUser = response.data.email;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    dataFetch.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/characters");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dataFetch.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
