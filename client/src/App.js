import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Payment />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
