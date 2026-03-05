import { useState } from "react";
import bookingsData from "../data/dummyBookings";

import BookingCard from "../components/booking/BookingCard";
import BookingSearchBar from "../components/booking/BookingSearchBar";
import BookingDetailsModal from "../components/booking/BookingDetailsModal";

import MapSection from "../components/map/MapSection";

export default function BookingDiscovery() {

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bookingsData.filter((b) =>
    b.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-10 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Discover Hotels
      </h1>

      <BookingSearchBar onSearch={setSearch} />

      <div className="grid lg:grid-cols-3 gap-10 mt-10">

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

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