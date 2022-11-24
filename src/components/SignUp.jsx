import { Link } from "react-router-dom";
import signUpPic from "./../asset/signup.png";
import logo from "./../asset/logo.png";
import "./../index.css";

function SignUp() {
  return (
    <div className="SignUp">
      <main className="SignUp-main grid grid-cols-2">
        <aside className="SignUp-pic">
          <img src={signUpPic} className="SignUp-pic" alt="SignUp-pic" />
        </aside>
        <article className="SignUp-form my-14 mx-32">
          <section className="SignUp-form-input">
            <Link to="/">
              <img
                src={logo}
                className="SignUp-logo h-12 mb-6"
                alt="logo-alt"
              />
            </Link>
            <h1 className="font-sans text-3xl font-bold">Sign Up</h1>
            <p className="SignUp-detail-p mt-1 mb-8">Creat your account</p>
          </section>
          <section className="SignUp-card bg-white px-6 py-8 rounded-2xl">
            <form>
              <label className="SignUp-label font-semibold" for="name">
                Name
              </label>
              <br />
              <input
                type="text"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="SignUp-label font-semibold" for="password">
                Username
              </label>
              <br />
              <input
                type="text"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="SignUp-label font-semibold" for="password">
                Email
              </label>
              <br />
              <input
                type="email"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="SignUp-label font-semibold" for="password">
                Password
              </label>
              <br />
              <input
                type="password"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="SignUp-label font-semibold" for="password">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                className="Register-input mb-2 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <button type="submit" className="Register-btn font-bold shadow">
                Sign Up
              </button>
              <br />
            </form>
          </section>
        </article>
      </main>
    </div>
  );
}

export default SignUp;
