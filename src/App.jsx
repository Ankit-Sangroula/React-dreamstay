import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Search from "./pages/Search";
import BookingHistory from "./pages/BookingHistory";
import Testimonial from "./pages/Testimonial";
import BookingForm from "./pages/BookingForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* Main Booking System Page (Discovery + Map + History Combined) */}
        <Route path="booking" element={<BookingPage />} />

        {/* Optional Standalone Pages */}
        <Route path="booking/form" element={<BookingForm />} />
        <Route path="booking/search" element={<Search />} />
        <Route path="booking/history" element={<BookingHistory />} />

        {/* Testimonials */}
        <Route path="testimonials" element={<Testimonial />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </Routes>
  );
}