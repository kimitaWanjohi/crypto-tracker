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
        <div className="bg-indigo-900 dark:bg-indigo-950 h-1 w-full">
          <Navbar dark={dark} setDark={setDark} />
          <Routes>
            <Route path="/" element={<Cryptos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
