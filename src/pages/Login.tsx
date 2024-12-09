import React from "react";
import { useLocation, useNavigate } from "react-router";
import { authService } from "../service/auth.service";
// Example Login Component
const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState('guinho4@gmail.com');
  const [password, setPassword] = React.useState('123456');
  const navigate = useNavigate();
  const { key } = useLocation();
  console.log("FROMMMMMMMMM",  key);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.login(username, password);
      // Redirect or handle successful login
      navigate("/dashboard")
    } catch (error) {
      // Handle login error
      alert('Login failed');
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