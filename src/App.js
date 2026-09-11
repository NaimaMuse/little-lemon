import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={<BookingPage />}
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;