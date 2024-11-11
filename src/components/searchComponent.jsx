import AscIcon from "./Icons/ascIcon";
import DescIcon from "./Icons/descIcon";

export default function SearchComponent() {
  return (
    <div className="flex flex-row mt-3">
      <div className="basis-full"></div>
      <div className="basis-1/7">
        <label className="input input-bordered flex items-center gap-2 bg-navy">
          <input type="text" className="grow" placeholder="Search" />
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
      <div className="basis-1/6  flex justify-center">
        <select className="select select-bordered w-full max-w-xs mx-1 bg-navy hover:bg-sky-700">
          <option disabled selected>
            Filter
          </option>
          <option>Title</option>
          <option>Type</option>
          <option>Facility</option>
        </select>
      </div>
      <div className="basis-1/12 flex justify-center items-center">
        <AscIcon />
        <DescIcon />
      </div>
    </div>
  );
}
