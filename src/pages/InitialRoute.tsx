/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router";
import LoginPage from "./Login";
import useAuthStore from "../hooks/useAuthStore";

const InitialRoute = () => {
  const { token } = useAuthStore((state) => state);
  console.log(" intial", token);

  return token ? <Navigate to="/dashboard" /> : <LoginPage />;
};

export default InitialRoute;
