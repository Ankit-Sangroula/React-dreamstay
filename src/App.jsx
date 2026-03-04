import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./features/booking/pages/Home";
import BookingDiscovery from "./features/booking/pages/BookingDiscovery";
import BookingHistory from "./features/booking/pages/BookingHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="booking">
          <Route index element={<BookingDiscovery />} />
          <Route path="history" element={<BookingHistory />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;