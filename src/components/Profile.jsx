import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";

const data = {
  username: "Andrew",
  name: "Andrew",
  email: "andrew@gmail.com",
  phone: "081234567892",
};

function Profile({ token }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);

  const getDataToken = async () => {
    try {
      const decoded = await jwtDecode(token);
      setUserData(await decoded);
      setUserId(await decoded.id);
      setIsLogin(true);
    } catch {
      navigate("/login");
    }
  };

  let firstName = String(userData.name).split(" ")[0];

  const getUserData = async () => {
    console.log(userId);
    try {
      await axios
        .get(`http://localhost:8080/api/users/${userId}`)
        .then((response) => {
          setData(() => response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserData = async () => {
    console.log(userId);
    try {
      await axios
        .put(`http://localhost:8080/api/users/${userId}`, data)
        .then((response) => {
          console.log(response);
          //   navigate("/profile");
        });
    } catch (error) {
      console.log(error);
    }
  };

  function inputHandler(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    getDataToken();
    getUserData();
  }, []);

  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar name={firstName} isLogin={isLogin} />

        <section className="flex py-4 my-8">
          <Sidebar />
          <div>
            <section className="text-sm">
              <p className="font-semibold">Profil Saya</p>
              <p>
                Kelola Informasi Profil Anda untuk mengontrol, melindungi, dan
                mengamankan akun
              </p>
            </section>
            <section className="flex flex-row gap-12 my-12">
              <section className="basis-1/2 flex flex-col text-sm text-right font-semibold self-center">
                <p className="h-14">Username</p>
                <p className="h-14">Nama</p>
                <p className="h-14">Email</p>
                <p className="h-14">Nomor Telepon</p>
                <p className="h-14">Jenis Kelamin</p>
                <p className="h-14">Tanggal Lahir</p>
              </section>
              <section className="flex flex-col text-sm font-semibold">
                <p className="h-12 w-full">{data.username}</p>
                <input
                  name="name"
                  type="text"
                  className="border-2 border-gray-200 p-1 px-3 w-80 mb-6"
                  value={data.name}
                  onChange={inputHandler}
                />
                <section className="flex gap-3">
                  <input
                    name="email"
                    type="email"
                    className="border-2 border-gray-200 p-1 px-3 w-80 mb-6"
                    value={data.email}
                    onChange={inputHandler}
                  />
                </section>
                <section className="flex gap-3">
                  <input
                    name="phone"
                    type="text"
                    className="border-2 border-gray-200 p-1 px-3 w-80 mb-6"
                    value={data.phone}
                    onChange={inputHandler}
                  />
                </section>
                <section className="flex gap-5">
                  <section className="flex gap-1 items-center mt-2 mb-4">
                    <input
                      type="radio"
                      id="laki-laki"
                      name="gender"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-50"
                      value="laki-laki"
                      onChange={inputHandler}
                      //   checked={data.gender === "laki-laki"}
                    />
                    <label for="laki-laki">Laki-laki</label>
                  </section>
                  <section className="flex gap-1 items-center mb-4">
                    <input
                      type="radio"
                      id="perempuan"
                      name="gender"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      value="perempuan"
                      onChange={inputHandler}
                      //   checked={data.gender === "perempuan"}
                    />
                    <label for="perempuan">Perempuan</label>
                  </section>
                </section>
                <section className="mt-3 border-2 border-gray-200 p-1 px-3">
                  <input
                    type="date"
                    name="birth_date"
                    value={data.birth_date}
                    onChange={inputHandler}
                  />
                </section>
              </section>
            </section>
            <section className="flex gap-4 justify-center">
              <section className="flex basis-1/3 justify-end">
                <img
                  src=""
                  alt=""
                  className="bg-gray-300 w-40 h-40 rounded-full"
                />
              </section>
              <section className="flex items-end">
                <section className="font-semibold text-center">
                  <button className="text-sm border-2 border-gray-200 p-1 px-3 mb-3">
                    Pilih Gambar
                  </button>
                  {/* accept="image/png, image/jpg, image/jpeg" */}
                  <p className="text-xs">Ukuran gambar: maks 1 MB</p>
                  <p className="text-xs">Format gambar: JPEG, .PNG</p>
                </section>
              </section>
            </section>
            <section className="flex justify-center">
              <button
                type="submit"
                className="mt-16 btn-in shadow text-black font-semibold hover:btn-in hover:opacity-70 focus:outline-none py-1 px-6 w-52 rounded-xl text-lg"
                onClick={updateUserData}
              >
                Save
              </button>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
