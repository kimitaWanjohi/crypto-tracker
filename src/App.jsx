import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cryptos from "./components/Cryptos";
// eslint-disable-next-line import/no-cycle
import Navbar from "./components/Navbar";

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <Router>
      <div className={`${dark ? "dark" : ""}`}>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Cryptos />} />
        </Routes>
      </div>
    </Router>
  );
}
