import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "@pages/Home";
import CheckIn from "@pages/CheckIn";
import NoShow from "@pages/NoShow";
import Notice from "@pages/Notice";
import "@styles/global.css";
import "@styles/fonts.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/noshow" element={<NoShow />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </Router>
  );
}

export default App;
