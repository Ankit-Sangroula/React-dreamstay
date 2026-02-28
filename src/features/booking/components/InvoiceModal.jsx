export default function InvoiceModal({ booking, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Invoice
        </h2>

        <p>Hotel: {booking.hotel}</p>
        <p>Location: {booking.location}</p>
        <p>Total: ₹{booking.price}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}