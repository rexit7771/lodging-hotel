import { Link } from "react-router-dom";
import { ButtonLogin } from "./Buttons/buttonLogin";
import ButtonNavCMS from "./Buttons/buttonNavCMS";

export default function NavbarCMS() {
  return (
    <div className="navbar bg-base-100" style={{ backgroundColor: "#001F3F" }}>
      <div className="navbar-start">
        <div>
          <ButtonNavCMS button={"addLodging"} />
        </div>
        <div>
          <ButtonNavCMS button={"addStaff"} />
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Stay Cozy - Admin Page
        </Link>
      </div>
      <div className="navbar-end">
        <ButtonLogin button={"logout"} />
      </div>
    </div>
  );
}
