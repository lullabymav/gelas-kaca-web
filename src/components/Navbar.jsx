import "./../index.css";
import { Link } from "react-router-dom";
import NavRegist from "./Nav-Regist";
import logo from "./../asset/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbar flex justify-between">
        <section className="flex">
          <Link to="/">
            <img src={logo} className="h-10" alt="logo-alt" />
          </Link>
          <ul className="flex m-3 ml-12 text-xs font-bold gap-8">
            <li>
              <Link to="/category">CATEGORY</Link>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </section>
        <section className="flex gap-3 m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4839F4"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="white"
            className="w-10 h-10 opacity-60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <NavRegist />
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
