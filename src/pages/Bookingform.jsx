export default function BookingForm() {
  return (
    <div className="p-6 flex justify-center">
      <form className="bg-blue-100 shadow-xl rounded-xl p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Dream Stay</h1>
        <h2 className="text-xl font-bold text-center text-gray-700">Book Your Stay</h2>

        {/* Destination */}
        <div className="flex flex-col">
          <label htmlFor="destination" className="mb-1 text-gray-700">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="eg. Pokhara, Kathmandu, etc"
            className="placeholder:text-xs sm:placeholder:text-sm border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Check-in & Check-out */}
        <div className="flex flex-col">
          <label htmlFor="checkin" className="mb-1 text-gray-700">Check-in Date</label>
          <input type="date" id="checkin" className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkout" className="mb-1 text-gray-700">Check-out Date</label>
          <input type="date" id="checkout" className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>

        {/* Guests & Rooms */}
        <div className="flex flex-col">
          <label htmlFor="guests" className="mb-1 text-gray-700">Number of Guests</label>
          <input type="number" id="guests" min="1" max="20" defaultValue="1" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rooms" className="mb-1 text-gray-700">Number of Rooms</label>
          <input type="number" id="rooms" min="1" max="10" defaultValue="1" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>

        {/* Room Type */}
        <div className="flex flex-col">
          <label htmlFor="roomtype" className="mb-1 text-gray-700">Room Type</label>
          <select id="roomtype" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
            <option value="">Select Room</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="family">Family</option>
            <option value="more">More</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg">
          Book Now
        </button>
      </form>
    </div>
  );
}
