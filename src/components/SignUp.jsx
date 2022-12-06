import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpPic from "./../asset/signup.png";
import logo from "./../asset/logo.png";
import "./../index.css";
// import api from './../api/api'
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    email: "",
    password: "",
    name: "",
    roles: ["user"],
  };
  const [password1, setPassword1] = useState("");

  const [inputData, setInputData] = useState(initialState);

  function inputHandler(evt) {
    const value = evt.target.value;
    setInputData({
      ...inputData,
      [evt.target.name]: value,
    });
  }

  function checkPassword() {
    let flag;
    if (inputData.password !== password1 && password1 !== "") {
      flag = false;
    } else {
      flag = true;
    }
    return flag;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { ...inputData };
    console.log(data);
    try {
      if (checkPassword() && password1 !== "") {
        await axios
          .post("http://localhost:8080/api/auth/signup", data)
          .then((response) => {
            console.log(response);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.response);
          });
        setInputData(initialState);
        setPassword1("");
      } else {
        console.log("tidak sama");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkPassword(); //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <form onSubmit={submitHandler}>
              <label className="SignUp-label font-semibold" htmlFor="name">
                Name
              </label>
              <br />
              <input
                type="text"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
                name="name"
                value={inputData.name}
                onChange={inputHandler}
                label="Name"
                placeholder="Masukkan nama"
              />
              <br />
              <label className="SignUp-label font-semibold" htmlFor="password">
                Username
              </label>
              <br />
              <input
                type="text"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
                name="username"
                value={inputData.username}
                onChange={inputHandler}
                label="Username"
                placeholder="Masukkan username"
              />
              <br />
              <label className="SignUp-label font-semibold" htmlFor="password">
                Email
              </label>
              <br />
              <input
                type="email"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
                name="email"
                value={inputData.email}
                onChange={inputHandler}
                label="Email"
                placeholder="Masukkan alamat email"
              />
              <br />
              <label className="SignUp-label font-semibold" htmlFor="password">
                Password
              </label>
              <br />
              <input
                type="password"
                className="Register-input mb-4 shadow text-gray-700 focus:outline-none"
                name="password"
                value={inputData.password}
                onChange={inputHandler}
                label="Password"
                placeholder="Masukkan password"
              />
              <br />
              <label className="SignUp-label font-semibold" htmlFor="password">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                className="Register-input mb-2 shadow text-gray-700 focus:outline-none"
                placeholder="Masukkan Konfirmasi password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                onBlur={checkPassword}
              />
              <br />
              {/* <Link to="/login"> */}
              <button
                type="submit"
                className="Register-btn font-bold shadow hover:btn-in hover:opacity-90"
              >
                Sign Up
              </button>
              {/* </Link> */}
              <br />
            </form>
          </section>
        </article>
      </main>
    </div>
  );
}

export default SignUp;
