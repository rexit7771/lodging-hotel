import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://h8-phase2-gc.vercel.app/apis/add-user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          username,
          email,
          password,
        },
      });
      toast.success("New Staff Successfully Added");
      navigate("/");
    } catch (error) {
      toast.error("Oops, There was an error");
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8 bg-hover mt-6">
        <div
          className="mx-auto max-w-lg bg-hover rounded"
          style={{ backgroundColor: "#3A6D8C" }}>
          <h1 className="text-center text-2xl font-bold sm:text-3xl text-white pt-5">
            Register New User
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
              <label htmlFor="username" className="text-xl font-bold">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-xl font-bold">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
