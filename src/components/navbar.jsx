import { Link } from "react-router-dom";
import { ButtonLogin } from "./Buttons/buttonLogin";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100" style={{ backgroundColor: "#001F3F" }}>
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" to={"/pub/lodgings"}>
          Stay Cozy
        </Link>
      </div>
      <div className="navbar-end">
        {/* TODO Bikin Button Login / Sign in */}
        <ButtonLogin button={"login"} />
      </div>
    </div>
  );
}
