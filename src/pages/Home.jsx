import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb2105c')] bg-cover bg-center">

        <div className="bg-black/60 p-10 rounded-2xl text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Perfect Stay
          </h1>

          <p className="mb-8 text-lg text-gray-200">
            Discover luxury hotels, explore destinations,
            manage bookings and generate invoices easily
            with DreamStay.
          </p>

          <div className="flex gap-6 justify-center">
            <Link to="/booking">
              <button className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700">
                Explore Hotels
              </button>
            </Link>

            <Link to="/booking/history">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold">
                Booking History
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Smart Search</h3>
            <p>
              Filter hotels by location, guests and dates
              to find your ideal stay instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Interactive Map</h3>
            <p>
              Discover hotel locations visually with our
              integrated map system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Instant Invoice</h3>
            <p>
              Generate booking invoices automatically
              after confirmation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}