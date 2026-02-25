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
        console.error(err.response || err);
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
      console.error(err.response || err);
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
      console.error(err);
      alert("Invoice download failed");
    }
  };

  return (
    <div className="space-y-4">
      {bookings.map((b) => (
        <div key={b._id} className="bg-white p-6 rounded-xl shadow flex justify-between items-center hover:shadow-2xl transition">
          <div>
            <h3 className="font-semibold text-lg">{b.destination}</h3>
            <p className="text-gray-500">{new Date(b.checkin).toLocaleDateString()} - {new Date(b.checkout).toLocaleDateString()}</p>
            <p className={`mt-1 font-semibold ${b.status==="Cancelled" ? "text-red-500" : "text-green-600"}`}>{b.status}</p>
          </div>
          <div className="flex gap-2">
            {b.status !== "Cancelled" && (
              <button onClick={() => handleCancel(b._id)} className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded">
                Cancel
              </button>
            )}
            <button onClick={() => handleDownload(b._id)} className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded">
              Invoice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}