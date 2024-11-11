import { Outlet } from "react-router-dom";
import NavbarCMS from "../components/navbarCms";
import { ToastContainer } from "react-toastify";

export default function RootCMS() {
  return (
    <>
      <NavbarCMS />
      <div className="container mt-10 mx-auto">
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}
