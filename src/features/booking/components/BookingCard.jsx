export default function BookingCard({ booking, onView }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold mb-2">
        {booking.hotel}
      </h3>
      <p className="text-gray-600">{booking.location}</p>
      <p className="mt-2 font-semibold">
        ₹{booking.price}
      </p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
          booking.status === "Confirmed"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
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
  );
}