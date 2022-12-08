import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPic from "./../asset/login-pic.png";
import logo from "./../asset/logo-M.png";
import "./../index.css";
import axios from "axios";

function Login({ setToken }) {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialState);

  function inputHandler(evt) {
    const value = evt.target.value;
    setInputData({
      ...inputData,
      [evt.target.name]: value,
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { ...inputData };
    try {
      await axios
        .post("http://localhost:8080/api/auth/signin", data)
        .then((response) => {
          setToken(() => response.data.accessToken);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error.response);
        });
      setInputData(initialState);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
            <form onSubmit={submitHandler}>
              <label className="Login-label  font-semibold" htmlFor="email">
                Username
              </label>
              <br />
              <input
                label="Password"
                name="username"
                value={inputData.username}
                onChange={inputHandler}
                placeholder="Masukkan username"
                type="text"
                className="Register-input mb-6 shadow text-gray-700 focus:outline-none"
              />
              <br />
              <label className="Login-label  font-semibold" htmlFor="password">
                Password
              </label>
              <br />
              <input
                name="password"
                value={inputData.password}
                onChange={inputHandler}
                label="Password"
                placeholder="Masukkan password"
                type="password"
                className="Register-input shadow text-gray-700 focus:outline-none"
              />
              <br />
              <a href="./" className="forget-input text-xs float-right mt-1">
                Forgot Password?
              </a>
              {/* <Link to="/"> */}
              <button
                type="submit"
                className="Register-btn font-bold shadow hover:btn-in hover:opacity-90"
              >
                Login
              </button>
              {/* </Link> */}
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
