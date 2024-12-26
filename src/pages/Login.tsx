import React from "react";
import { useNavigate } from "react-router";
import { authService } from "../service/auth.service";
import useAuthStore from "../hooks/useAuthStore";
// Example Login Component
const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState("guinho4@gmail.com");
  const [password, setPassword] = React.useState("123456");
  const navigate = useNavigate();
  const { saveToken } = useAuthStore((state) => state);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const access_token = await authService.login(username, password);
      // Redirect or handle successful login
      saveToken(access_token);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Handle login error
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
