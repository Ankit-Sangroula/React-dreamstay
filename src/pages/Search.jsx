import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getBookings } from "../api/bookingAPI";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

// Component to move map programmatically
function Recenter({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 12);
  return null;
}

export default function Search() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [center, setCenter] = useState([27.7172, 85.3240]); // Default Kathmandu
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookings();
        setBookings(res.data);
        if (res.data.length > 0) {
          setCenter([res.data[0].lat, res.data[0].lng]);
        }
      } catch (err) {
        console.error("Error fetching bookings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Search location using Nominatim OpenStreetMap API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setCenter([lat, lon]);
        setSearchResult({ lat, lng: lon, name: search });
      } else {
        alert("Location not found!");
      }
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading map...</p>;

  return (
    <div className="flex flex-col gap-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search location..."
          className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 rounded-xl font-semibold"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="h-[70vh] w-full rounded-2xl shadow overflow-hidden">
        <MapContainer
          center={center}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Bookings markers */}
          {bookings.map((b) => (
            <Marker key={b._id} position={[b.lat, b.lng]}>
              <Popup>
                <strong>{b.destination}</strong>
                <br />
                {new Date(b.checkin).toLocaleDateString()} - {new Date(b.checkout).toLocaleDateString()}
                <br />
                Status: {b.status}
              </Popup>
            </Marker>
          ))}

          {/* Marker for search result */}
          {searchResult && (
            <Marker position={[searchResult.lat, searchResult.lng]}>
              <Popup>{searchResult.name}</Popup>
              <Recenter lat={searchResult.lat} lng={searchResult.lng} />
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}