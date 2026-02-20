import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Dream Stay</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/booking" className="hover:text-yellow-300">Booking</Link>
        <Link to="/search" className="hover:text-yellow-300">Search</Link>
        <Link to="/bookinghistory" className="hover:text-yellow-300">History</Link>
        <Link to="/testimonial" className="hover:text-yellow-300">Testimonials</Link>
      </div>
    </nav>
  );
}