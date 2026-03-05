export default function BookingCard({ booking, onView }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        alt="hotel"
        className="h-48 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold">{booking.hotel}</h3>

        <p className="text-gray-500">{booking.location}</p>

        <p className="text-lg font-semibold mt-2">
          ₹{booking.price}
        </p>

        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm
          ${
            booking.status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {booking.status}
        </span>

        <button
          onClick={() => onView(booking)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </button>

      </div>
    </div>
  );
}