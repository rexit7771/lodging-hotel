import { Link } from "react-router-dom";
import Icon from "../Icons/icon";

export default function ButtonNavCMS({ button }) {
  if (button === "addLodging") {
    return (
      <>
        <Link
          className="inline-flex items-center gap-2 rounded border border-sky-900 bg-sky-900 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white-500 me-2"
          to={"/create"}>
          <Icon icon={"plus"} />
          <span className="text-sm font-medium">Add Lodging</span>
        </Link>
      </>
    );
  } else if (button === "addStaff") {
    return (
      <>
        <Link
          className="inline-flex items-center gap-2 rounded border border-sky-900 bg-sky-900 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white-500  me-2"
          to={"/add-user"}>
          <Icon icon={"addStaff"} />
          <span className="text-sm font-medium">Add Staff</span>
        </Link>
      </>
    );
  }
}
