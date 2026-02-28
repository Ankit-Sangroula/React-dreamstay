import bookings from "../data/dummyBookings";

export default function BookingHistory() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Booking History
      </h1>

      <div className="space-y-6">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{b.hotel}</h3>
              <p className="text-gray-500">{b.date}</p>
            </div>
            <span className="font-semibold">
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}