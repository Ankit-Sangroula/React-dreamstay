import BookingForm from "./Bookingform";
import BookingHistory from "./BookingHistory";
import Search from "./Search";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 text-center shadow">
        <h1 className="text-4xl font-bold">Dream Stay Nepal</h1>
        <p className="text-blue-100 mt-2">Book your perfect hotel stay in Nepal</p>
      </header>

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* LEFT: Booking Form */}
        <div className="lg:w-1/3">
          <BookingForm />
        </div>

        {/* RIGHT: Map */}
        <div className="lg:w-2/3">
          <Search />
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Booking History</h2>
        <BookingHistory />
      </div>
    </div>
  );
}