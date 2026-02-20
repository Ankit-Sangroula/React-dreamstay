import { useEffect, useState } from "react";
import { getBookings, updateBooking, downloadInvoice } from "../api/bookingAPI";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookings();
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err.response || err);
      }
    };
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await updateBooking(id, { status: "Cancelled" });
      const res = await getBookings();
      setBookings(res.data);
    } catch (err) {
      console.error("Cancel booking error:", err.response || err);
      alert("Failed to cancel booking");
    }
  };

  const handleDownload = async (id) => {
    try {
      const res = await downloadInvoice(id);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `invoice_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Invoice download error:", err);
      alert("Invoice download failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Booking History</h2>
      {bookings.map((b) => (
        <div
          key={b._id}
          className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{b.destination}</h3>
            <p className="text-gray-500">
              {new Date(b.checkin).toLocaleDateString()} - {new Date(b.checkout).toLocaleDateString()}
            </p>
            <p className="text-blue-600 mt-2">{b.status}</p>
          </div>
          <div className="flex gap-2">
            {b.status !== "Cancelled" && (
              <button
                onClick={() => handleCancel(b._id)}
                className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            )}
            <button
              onClick={() => handleDownload(b._id)}
              className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded"
            >
              Invoice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}