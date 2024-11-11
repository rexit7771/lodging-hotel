import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

export function ButtonLogin({ button }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  if (button === "login") {
    return (
      <>
        <Link
          className="inline-flex items-center gap-2 rounded border border-sky-900 bg-sky-900 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white-500"
          to={"/login"}>
          <span className="text-sm font-medium"> Login </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 rounded border border-sky-900 bg-red-700 px-8 py-3 text-white hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-white-500">
          <span className="text-sm font-medium"> Logout </span>
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </>
    );
  }
}
