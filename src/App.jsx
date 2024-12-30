import "react-toastify/dist/ReactToastify.css";
import "@styles/global.css";
import "@styles/fonts.css";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "@contexts/AuthContext";
import Callback from "@pages/Callback";
import CheckIn from "@pages/CheckIn";
import Home from "@pages/Home";
import NoShow from "@pages/NoShow";
import ProtectedRoute from "@components/ProtectedRoute";
import Team from "@pages/Team";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ToastContainer theme="dark" />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/checkin"
            element={
              <ProtectedRoute>
                <CheckIn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/noshow"
            element={
              <ProtectedRoute>
                <NoShow />
              </ProtectedRoute>
            }
          />
          <Route path="/Team" element={<Team />} />
          <Route path="/login/oauth2/code/google" element={<Callback />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
