import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6">

      <h1 className="text-5xl font-bold mb-6">
        Booking System & Discovery
      </h1>

      <p className="max-w-2xl mb-10 text-lg">
        Search hotels, explore destinations, manage bookings,
        update status and generate invoices.
      </p>

      <div className="flex gap-6">
        <Link to="/booking">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Discover & Book
          </button>
        </Link>

        <Link to="/booking/history">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Booking History
          </button>
        </Link>
      </div>
    </div>
  );
}