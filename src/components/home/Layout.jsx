import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* Navbar here if you create one */}
      <Outlet />
      {/* Footer here if you create one */}
    </>
  );
}