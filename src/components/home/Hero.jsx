import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="h-screen bg-blue-600 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Experience Luxury Like Never Before
      </h1>
      <p className="max-w-2xl mb-8 text-lg">
        Book your dream stay with world-class comfort and unforgettable experiences.
      </p>

      <Link to="/rooms">
        <Button variant="dark">Explore Rooms</Button>
      </Link>
    </section>
  );
}