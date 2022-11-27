import { Link } from "react-router-dom";
import loginPic from "./../asset/login-pic.png";
import logo from "./../asset/logo.png";
import "./../index.css";

function Login() {
  return (
    <div className="Login">
      <main className="Login-main grid grid-cols-2">
        <aside className="Login-pic">
          <img src={loginPic} className="Login-pic" alt="login-pic" />
        </aside>
        <article className="Login-form">
          <section className="Login-form-input my-28 mx-40">
            <Link to="/">
              <img src={logo} className="Login-logo h-12 mb-6" alt="logo-alt" />
            </Link>
            <h1 className="font-sans text-3xl font-bold mb-6">Login</h1>
            <form>
              <label className="Login-label  font-semibold" for="email">
                Email
              </label>
              <br />
              <input
                type="email"
                className="Register-input mb-6 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="Login-label  font-semibold" for="password">
                Password
              </label>
              <br />
              <input
                type="password"
                className="Register-input shadow text-gray-700 focus:outline-none"
              />
              <br />
              <a href="./" className="forget-input text-xs float-right mt-1">
                Forgot Password?
              </a>
              <Link to="/">
                <button type="submit" className="Register-btn font-bold shadow hover:btn-in hover:opacity-90">
                  Login
                </button>
              </Link>
              <br />
              <Link to="/register">
                <button
                  type="button"
                  className="Register-input font-bold shadow hover:btn-in hover:opacity-90"
                >
                  Sign Up
                </button>
              </Link>
            </form>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Login;
