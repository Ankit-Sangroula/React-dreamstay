import { useState } from "react";
import { createBooking } from "../api/bookingAPI";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: 1,
    rooms: 1,
    roomtype: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(formData);
      alert("Booking successful!");
      setFormData({ destination: "", checkin: "", checkout: "", guests: 1, rooms: 1, roomtype: "" });
    } catch (err) {
      console.error(err.response || err);
      alert("Booking failed! Check console for details.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          id="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Destination"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          required
        />

        <div className="flex gap-4">
          <input type="date" id="checkin" value={formData.checkin} onChange={handleChange} className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400" required />
          <input type="date" id="checkout" value={formData.checkout} onChange={handleChange} className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400" required />
        </div>

        <div className="flex gap-4 items-center">
          <input type="number" id="guests" min="1" max="20" value={formData.guests} onChange={handleChange} className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400" placeholder="Guests" required />
          <input type="number" id="rooms" min="1" max="10" value={formData.rooms} onChange={handleChange} className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400" placeholder="Rooms" required />
        </div>

        <select
          id="roomtype"
          value={formData.roomtype}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
          <option value="family">Family</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-lg">
          Book Now
        </button>
      </form>
    </div>
  );
}