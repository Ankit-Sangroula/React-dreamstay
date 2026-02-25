import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hotel-bg.jpg')" }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-blue-800 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-white text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to Dream Stay
        </h1>
        <p className="max-w-xl mb-12 text-lg md:text-xl text-gray-200 drop-shadow-md">
          Book trusted hotels across Nepal. Easy booking, smart search, and a seamless experience.
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <Link
            to="/bookingpage"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          >
            Booking
          </Link>

          <Link
            to="/search"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          >
            Search
          </Link>

          <Link
            to="/bookinghistory"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 p-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          >
            History
          </Link>

          <Link
            to="/testimonial"
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 p-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          >
            Testimonials
          </Link>
        </div>
      </div>

      {/* Optional: Empty div to ensure full height and no bottom gap */}
      <div className="h-20"></div>
    </div>
  );
}