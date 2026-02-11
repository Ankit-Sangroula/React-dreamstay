import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm"; // your correct file name
import Search from "./pages/Search";
import History from "./pages/History";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<BookingForm />} />
          <Route path="search" element={<Search />} />
          <Route path="history" element={<History />} />
          <Route path="testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
