import { useState } from "react";
import bookingsData from "../data/dummyBookings";
import BookingCard from "../components/BookingCard";
import BookingSearchBar from "../components/BookingSearchBar";
import MapSection from "../components/MapSection";
import BookingDetailsModal from "../components/BookingDetailsModal";

export default function BookingDiscovery() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bookingsData.filter((b) =>
    b.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        Discover & Book
      </h1>

      <BookingSearchBar onSearch={setSearch} />

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="grid gap-6">
          {filtered.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onView={setSelected}
            />
          ))}
        </div>

        <MapSection />
      </div>

      {selected && (
        <BookingDetailsModal
          booking={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}