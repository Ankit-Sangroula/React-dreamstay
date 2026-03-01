import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/home/Layout";

import Home from "./features/booking/pages/Home";
import BookingDiscovery from "./features/booking/pages/BookingDiscovery";
import BookingHistory from "./features/booking/pages/BookingHistory";

function App() {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<Layout />}>
        
        {/* Home */}
        <Route index element={<Home />} />

        {/* Booking Section */}
        <Route path="booking">
          <Route index element={<BookingDiscovery />} />
          <Route path="history" element={<BookingHistory />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      
      </Route>
    </Routes>
  );
}

export default App;