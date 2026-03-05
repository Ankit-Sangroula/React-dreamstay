export default function BookingSearchBar({ onSearch }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Search location..."
        onChange={(e) => onSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        type="date"
        className="border rounded-lg px-4 py-2"
      />
      <input
        type="number"
        min="1"
        placeholder="Guests"
        className="border rounded-lg px-4 py-2"
      />
      <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
        Search
      </button>
    </div>
  );
}