import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./pages/Protected";

// App Component Setup
const App: React.FC = () => {
  return (
        <Routes>
          <Route index element={
                <LoginPage />
           } />
           <Route path="/dashboard" element={<ProtectedRoute component={Dashboard}/>}/>
        </Routes>
  );
}

export default App
