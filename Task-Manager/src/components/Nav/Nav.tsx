import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ModeToggle } from "../mode-toggle";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-[60px]" src={logo} alt="logo" />
        <h1 className="text-2xl font-semibold">
          Task <span className="font-extrabold">Manager</span>
        </h1>
      </div>

      <ul className="flex items-center gap-2 font-medium">
        <Link to={"/"}>Task</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/profile"}>Profile</Link>
      </ul>

      <ModeToggle />
    </nav>
  );
};

export default Nav;
