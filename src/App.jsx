import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regions from "./components/Regions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regions />} />
      </Routes>
    </Router>
  );
}
