import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "@pages/Home";
import CheckIn from "@pages/CheckIn";
import NoShow from "@pages/NoShow";
import Team from "@pages/Team";
import Callback from "@pages/Callback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@styles/global.css";
import "@styles/fonts.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/noshow" element={<NoShow />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/login/oauth2/code/google" element={<Callback />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
