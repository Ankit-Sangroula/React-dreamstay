import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-blue-600">
          DreamStay
        </Link>

        <div className="flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/booking">Discover</Link>
          <Link to="/booking/history">History</Link>
        </div>

      </div>

    </nav>
  );
}