import { useNavigate, useParams } from "react-router-dom";
import { phase2Api } from "../helpers/http-client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toastify } from "toastify";
import axios from "axios";
import PropTypes from "prop-types";

export default function FormAddLodging({ form }) {
  let { id } = useParams();

  let [name, setName] = useState("");
  let [imgUrl, setImgUrl] = useState("");
  let [facility, setFacility] = useState("");
  let [location, setLocation] = useState("");
  let [roomCapacity, setRoomCapacity] = useState(1);
  let [typeId, setTypeId] = useState(1);
  const navigate = useNavigate();

  const notifySuccess = () => toast.success("New Lodging Successfully Added");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://h8-phase2-gc.vercel.app/apis/rent-room/lodgings",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          name,
          imgUrl,
          facility,
          location,
          roomCapacity,
          typeId,
        },
      });
      notifySuccess();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLodgingById = async () => {
    const { data } = await phase2Api.get(`/apis/rent-room/lodgings/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    console.log(data.data);

    setName(data.data.name);
    setImgUrl(data.data.imgUrl);
    setFacility(data.data.facility);
    setLocation(data.data.location);
    setRoomCapacity(data.data.roomCapacity);
    setTypeId(data.data.typeId);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `https://h8-phase2-gc.vercel.app/apis/rent-room/lodgings/${id}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          name,
          imgUrl,
          facility,
          location,
          roomCapacity,
          typeId,
        },
      });

      toast.success(`Data with id ${id} Successfully Updated`);
      navigate("/");
    } catch (error) {
      toast.error("Sorry, There's an error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLodgingById();
  }, []);

  if (form === "addLodging") {
    return (
      <>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-hover">
          <div
            className="mx-auto max-w-lg bg-hover rounded"
            style={{ backgroundColor: "#3A6D8C" }}>
            <h1 className="text-center text-2xl font-bold sm:text-3xl text-white pt-5">
              Add Lodging
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <div>
                <label htmlFor="name" className="text-xl font-bold">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="facility" className="text-xl font-bold">
                  facility
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="facility"
                    value={facility}
                    onChange={(e) => setFacility(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="roomCapacity" className="text-xl font-bold">
                  Room Capacity
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="roomCapacity"
                    value={roomCapacity}
                    onChange={(e) => setRoomCapacity(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="imgUrl" className="text-xl font-bold">
                  Image Url
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="text-xl font-bold">
                  Location
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="TypeId" className="text-xl font-bold">
                  Type
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="TypeId"
                    value={typeId}
                    onChange={(e) => setTypeId(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (form === "edit") {
    return (
      <>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-hover">
          <div
            className="mx-auto max-w-lg bg-hover rounded"
            style={{ backgroundColor: "#3A6D8C" }}>
            <h1 className="text-center text-2xl font-bold sm:text-3xl text-white pt-5">
              Edit Lodging id {id}
            </h1>
            <form
              onSubmit={handleUpdate}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <div>
                <label htmlFor="name" className="text-xl font-bold">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="facility" className="text-xl font-bold">
                  facility
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="facility"
                    value={facility}
                    onChange={(e) => setFacility(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="roomCapacity" className="text-xl font-bold">
                  Room Capacity
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="roomCapacity"
                    value={roomCapacity}
                    onChange={(e) => setRoomCapacity(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="imgUrl" className="text-xl font-bold">
                  Image Url
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="text-xl font-bold">
                  Location
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="TypeId" className="text-xl font-bold">
                  Type
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="TypeId"
                    value={typeId}
                    onChange={(e) => setTypeId(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (form === "addStaff") {
    return (
      <>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-hover">
          <div
            className="mx-auto max-w-lg bg-hover rounded"
            style={{ backgroundColor: "#3A6D8C" }}>
            <h1 className="text-center text-2xl font-bold sm:text-3xl text-white pt-5">
              Add Lodging
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <div>
                <label htmlFor="name" className="text-xl font-bold">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="facility" className="text-xl font-bold">
                  facility
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    placeholder=""
                    name="facility"
                    value={facility}
                    onChange={(e) => setFacility(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="roomCapacity" className="text-xl font-bold">
                  Room Capacity
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="roomCapacity"
                    value={roomCapacity}
                    onChange={(e) => setRoomCapacity(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="imgUrl" className="text-xl font-bold">
                  Image Url
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="text-xl font-bold">
                  Location
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="TypeId" className="text-xl font-bold">
                  Type
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-navy"
                    name="TypeId"
                    value={typeId}
                    onChange={(e) => setTypeId(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white hover:bg-sky-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

FormAddLodging.propTypes = {
  form: PropTypes.string,
};
