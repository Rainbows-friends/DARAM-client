import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CheckIn from "./pages/CheckIn";
import NoShow from "./pages/NoShow";
import Notice from "./pages/Notice";
import Layout from "./layout";
import "./styles/global.css";
import "./styles/fonts.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/noshow" element={<NoShow />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
