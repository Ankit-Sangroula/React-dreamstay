import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="font-bold text-2xl">Dream Stay</NavLink>
        <div className="flex gap-6">
          {["/", "/bookingpage", "/search", "/bookinghistory", "/testimonial"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300"
              }
            >
              {["Home","Booking","Search","History","Testimonials"][idx]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}