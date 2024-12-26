import { Navigate } from "react-router";
import useAuthStore from "../hooks/useAuthStore";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute = ({ component: Component }: ProtectedRouteProps) => {
  const { token } = useAuthStore((state) => state);

  console.log(" PROTECTED", token);
  return token ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
