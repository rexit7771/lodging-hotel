import { useEffect, useState } from "react";
import { phase2Api } from "../helpers/http-client";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "./searchComponent";
import axios from "axios";
import Pagination from "./pagination";

export default function lodgings() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  let [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  const [types, setTypes] = useState([]);
  const [lodgings, setLodgings] = useState({
    query: [],
    pagination: {
      currentPage: 1,
      totalPage: 1,
      totalRows: 1,
    },
  });

  let type = [
    "Others",
    "Villas",
    "Hotels",
    "Guest Houses",
    "Homestays",
    "Homes",
    "Hostels",
    "Resorts",
    "Apartments",
    "Bed & Breakfasts",
    "Shared Room",
    "Cottage",
  ];

  const BASE_URL = "https://h8-phase2-gc.vercel.app";

  const fetchLodgings = async () => {
    const url = new URL(BASE_URL);
    url.pathname = "/apis/pub/rent-room/lodgings";

    if (search) {
      url.searchParams.append("q", search);
    }

    if (selectedType) {
      url.searchParams.append("i", selectedType);
    }

    url.searchParams.append("page", page.toString());
    url.searchParams.append("sort", sort);
    // console.log(url.toString(), "<===");

    // * Cara menambahkan query secara manual
    // let urlStr = "https://game.com?apikey=asdfadsf";
    // if (tags) {
    //   urlStr += "&tags=" + tags;
    // }
    // *

    try {
      // const { data } = await axios.get(urlStr);
      const { data } = await axios.get(url.toString());
      setLodgings(data.data);
    } catch (error) {
      console.log(error, "<<< e - fetch Lodgings");
    }
  };

  console.log(lodgings.pagination);

  // useEffect(() => {
  //   fetchTypes();
  // }, []);

  useEffect(() => {
    void fetchLodgings();
  }, [search, sort, page, selectedType]);

  return (
    <>
      {/* TODO Bikin fitur Pagination, Search, filter dan sort */}
      {/* <SearchComponent /> */}
      <div className="flex flex-row mt-3">
        <div className="basis-1/4">
          <div className="inline-flex items-center justify-center gap-3 w-full mx-auto mt-10">
            <button
              // href="#"
              onClick={() => setPage(page--)}
              className="bg-navy inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white h-auto w-auto">
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <p className="text-xs text-gray-900 dark:text-white">
              {lodgings.pagination.currentPage}
              <span className="mx-0.25">/</span>
              {lodgings.pagination.totalPage}
            </p>

            <button
              // href="#"
              onClick={() => setPage(page++)}
              className="bg-navy inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white h-auto w-auto">
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="basis-full "></div>
        <div className="basis-1/7 justify-center pt-3 items-center">
          <label className="input input-bordered flex items-center gap-2 bg-navy justify-center items-center">
            <input
              type="text"
              className="grow "
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="basis-1/6  flex justify-center items-center">
          <select
            className="select select-bordered w-full max-w-xs mx-1 bg-navy hover:bg-sky-700"
            onChange={(e) => setSelectedType(e.target.value)}>
            <option disabled selected>
              Type
            </option>
            {type.map((e, idx) => {
              return (
                <option key={idx + 1} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>

        {/* Button Asc / Desc */}
        <div className="basis-1/12 flex justify-center items-center">
          {/* <AscIcon /> */}
          <button
            className="btn bg-navy hover:bg-sky-700"
            onClick={() => setSort("ASC")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
          </button>

          {/* <DescIcon /> */}
          <button
            className="ms-2 btn bg-navy hover:bg-sky-700"
            onClick={() => setSort("DESC")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* </div> */}
      <div className="mt-5 grid grid-cols-3 gap-4 rounded">
        {lodgings.query.map((lodging) => {
          return (
            <>
              <div
                className="card bg-base-100 shadow-xl pt-5"
                style={{ backgroundColor: "#6A9AB0" }}>
                <Link to={`${lodging.id}`}>
                  <figure>
                    <img
                      src={lodging.imgUrl}
                      alt="Hotel Img"
                      height={450}
                      width={450}
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-navy font-bold">
                      {lodging.name}
                    </h2>
                    <p className="text-white">
                      <span className="text-sky-900 font-bold">Location: </span>{" "}
                      <br />
                      {lodging.location}
                    </p>
                    <p className="text-white">
                      <span className="text-sky-900 font-bold">Facility:</span>
                      <br />
                      {lodging.facility}
                    </p>
                    <p className="text-white">
                      <span className="text-sky-900 font-bold">Type:</span>
                      <br />
                      {lodging.Type.name}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
