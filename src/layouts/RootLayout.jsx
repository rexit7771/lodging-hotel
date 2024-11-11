import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-10 mx-auto">
        <Outlet />
      </div>
    </>
  );
}
