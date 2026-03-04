import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapSection() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-96">
      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Goa */}
        <Marker position={[15.2993, 74.1240]}>
          <Popup>Ocean View Resort - Goa</Popup>
        </Marker>

        {/* Manali */}
        <Marker position={[32.2432, 77.1892]}>
          <Popup>Mountain Paradise - Manali</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}