import "./../index.css";
import { Link } from "react-router-dom";

function NavRegist() {
  return (
    <div>
      <section className="btn flex gap-3 m-1">
        <Link
          to="/register"
          className="btn-up w-28 rounded-3xl text-xs font-bold text-center pt-2"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="btn-in w-28 rounded-3xl text-xs font-bold text-center pt-2"
        >
          Sign In
        </Link>
      </section>
    </div>
  );
}

export default NavRegist;
