/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

import axios from "axios";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [authState, setAuthState] = useState(() => {
    const storedState = localStorage.getItem("authState");
    return storedState ? JSON.parse(storedState) : null;
  });
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    setAuthState(data);
    localStorage.setItem("authState", JSON.stringify(data));
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    setAuthState(null)
    navigate("/", { replace: true });
  };

  const fetchUserInfo = async () => {
    try {
      const { token } = authState;
      if (!token) return;

      const response = await axios.get("https://api-web-stunting.up.railway.app/api/v1/auth", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setUserInfo(response.data.data);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("authState");
        window.location.href = "/login";
      }
      console.error(
        "Failed to fetch user info",
        error.response?.data || error.message
      );
      setUserInfo(null);
    }
  };

  useEffect(() => {
    if (authState.token) {
      fetchUserInfo(); // Fetch user info on login
    }
  }, [authState]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      userInfo,
      authState
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
