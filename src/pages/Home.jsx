import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/hotel-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center flex-1 text-white text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Welcome to Dream Stay
        </h1>

        <p className="max-w-xl mb-10 text-gray-200">
          Book trusted hotels across Nepal. Easy booking,
          smart search, and seamless experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">

          <Link to="/booking" className="bg-blue-600 hover:bg-blue-500 p-4 rounded-xl text-lg font-semibold">
            Booking
          </Link>

          <Link to="/search" className="bg-green-600 hover:bg-green-500 p-4 rounded-xl text-lg font-semibold">
            Search
          </Link>

          <Link to="/history" className="bg-purple-600 hover:bg-purple-500 p-4 rounded-xl text-lg font-semibold">
            History
          </Link>

          <Link to="/testimonial" className="bg-orange-600 hover:bg-orange-500 p-4 rounded-xl text-lg font-semibold">
            Testimonial
          </Link>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-300 text-center py-4">
        © 2026 Dream Stay | Developed by Ankit
      </footer>
    </div>
  );
}

export default Home;
