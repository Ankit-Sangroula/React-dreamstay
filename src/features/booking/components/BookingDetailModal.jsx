import InvoiceModal from "./InvoiceModal";
import { useState } from "react";

export default function BookingDetailsModal({ booking, onClose }) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [status, setStatus] = useState(booking.status);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          {booking.hotel}
        </h2>

        <p>Location: {booking.location}</p>
        <p>Price: ₹{booking.price}</p>

        <div className="mt-4">
          <label className="block mb-1 font-medium">
            Update Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          >
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowInvoice(true)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg"
          >
            Generate Invoice
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 py-2 rounded-lg"
          >
            Close
          </button>
        </div>

        {showInvoice && (
          <InvoiceModal booking={booking} onClose={() => setShowInvoice(false)} />
        )}
      </div>
    </div>
  );
}