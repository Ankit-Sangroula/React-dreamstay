import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookingHistory from "./pages/BookingHistory";
import Testimonial from "./pages/Testimonial";
import BookingForm from "./pages/Bookingform";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<BookingForm />} />
        <Route path="search" element={<Search />} />
        <Route path="bookinghistory" element={<BookingHistory />} />
        <Route path="testimonial" element={<Testimonial />} />
      </Route>
    </Routes>
  );
}