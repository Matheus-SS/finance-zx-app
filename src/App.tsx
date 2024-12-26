import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import InitialRoute from "./pages/InitialRoute";
// App Component Setup
const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InitialRoute />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute component={Dashboard} />}
      />
    </Routes>
  );
};

export default App;
