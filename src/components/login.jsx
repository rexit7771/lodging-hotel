import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { phase2Api } from "../helpers/http-client";
import Register from "./register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const response = await phase2Api.post("/apis/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", response.data.data.access_token);

      navigate("/");
    } catch (error) {
      console.log(error, "=======");
    }
  };

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-hover">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <Link
            className="rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700"
            to={"/pub/lodgings"}>
            Back to Home
          </Link>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Login Now!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="mx-auto mb-0 mt-10 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="ms-2 font-bold h3 text-xl">
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-xl font-bold">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-white"></p>
              <button
                type="submit"
                className="inline-block rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
