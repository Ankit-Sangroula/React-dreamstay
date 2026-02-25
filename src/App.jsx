import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage"; // combined form + map + history
import Search from "./pages/Search";
import BookingHistory from "./pages/BookingHistory";
import Testimonial from "./pages/Testimonial";
import BookingForm from "./pages/Bookingform";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Booking page with Form + Map + History */}
        <Route path="bookingpage" element={<BookingPage />} />

        {/* Optional: individual pages if needed */}
        <Route path="booking" element={<BookingForm />} />
        <Route path="search" element={<Search />} />
        <Route path="bookinghistory" element={<BookingHistory />} />
        <Route path="testimonial" element={<Testimonial />} />
      </Route>
    </Routes>
  );
}