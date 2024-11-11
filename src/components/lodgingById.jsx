import { useEffect, useState } from "react";
import { phase2Api } from "../helpers/http-client";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function LodgingById() {
  const navigate = useNavigate();
  const [lodging, setlodging] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchLodging = async () => {
    try {
      setLoading(true);
      const { data } = await phase2Api.get(
        `/apis/pub/rent-room/lodgings/${id}`
      );
      setlodging(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLodging();
  }, [id]);

  if (loading) {
    return <h1>Loading Data....</h1>;
  }

  if (!lodging) {
    return (
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oops!
          </p>

          <p className="mt-4 text-gray-500">We can't find that page.</p>

          <Link
            to={"/pub/lodgings"}
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 bg-navy rounded">
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mx-auto grid grid-cols-3 gap-3">
        <img
          alt=""
          src={lodging.imgUrl}
          className="rounded-md object-cover"
          height={700}
          width={700}
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="font-bold text-xl text-custom-sky">Name</dt>
              <dd className="text-xl text-white">{lodging.name}</dd>
            </div>
            <div className="mt-10">
              <dt className="font-bold text-xl text-custom-sky">Facility</dt>
              <dd className="text-xl text-white">{lodging.facility}</dd>
            </div>
            <div className="mt-5">
              <dt className="font-bold text-xl text-custom-sky">
                Room Capacity
              </dt>
              <dd className="text-xl text-white">{lodging.roomCapacity}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-2">
          <div className="">
            <dt className="font-bold text-xl text-custom-sky">Location</dt>

            <dd className="font-xl text-white">{lodging.location}</dd>
          </div>
          <div className="mt-10">
            <dt className="font-bold text-xl text-custom-sky">Type</dt>
            <dd className="text-xl text-white">{lodging.Type.name}</dd>
          </div>
          <div className="mt-10">
            <dt className="font-bold text-xl text-custom-sky">Owner</dt>
            <dd className="text-xl text-white">{lodging.User.username}</dd>
          </div>
        </div>
      </a>
    </div>
  );
}
