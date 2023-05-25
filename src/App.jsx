import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cryptos from "./components/Cryptos";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cryptos />} />
      </Routes>
    </Router>
  );
}
