import BookingForm from "./Bookingform";
import BookingHistory from "./BookingHistory";
import Search from "./Search";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800">
          Plan Your Perfect Stay
        </h1>
        <p className="text-gray-500 mt-4">
          Find hotels, explore locations and manage your bookings
        </p>
      </section>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <BookingForm />
        </div>

        <div className="lg:col-span-2">
          <Search />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Your Booking History
        </h2>
        <BookingHistory />
      </div>

    </div>
  );
}