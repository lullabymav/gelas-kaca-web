import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// const items = [
//   {
//     id: 1,
//     name: "Speaker Kecil",
//     type: "Sound System",
//     kuantitas: 1,
//     price: 50000,
//   },
// ];

function Cart({ token }) {
  const rentInitial = {
    address: "",
    rent_start: "",
    rent_end: "",
    state: 0,
  };
  // const [rentDate, setRentDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  const [vanue, setVanue] = useState("");
  const [items, setItems] = useState([]);
  const [rent, setRent] = useState(rentInitial);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  //const history = useHistory();

  const getDataToken = async () => {
    try {
      const decoded = await jwtDecode(token);
      setUserData(await decoded);
      setIsLogin(true);
    } catch {
      navigate("/login");
    }
  };

  function inputHandler(evt) {
    const value = evt.target.value;
    setRent({
      ...rent,
      [evt.target.name]: value,
    });
  }

  const getCart = async () => {
    try {
      await axios.get("http://localhost:8080/api/carts").then((response) => {
        setItems(() => response.data);
        console.log(items);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataToken();
    getCart();
  }, []);

  const removeItem = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/api/carts/${id}`)
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const submitRent = async (e) => {
    e.preventDefault();
    const data = { ...rent, userId: userData.id };
    try {
      await axios.post(`http://localhost:8080/api/rents/`, data).then((res) => {
        navigate("/list");
      });
    } catch (err) {
      console.log(err);
    }
  };

  let firstName = String(userData.name).split(" ")[0];

  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar name={firstName} isLogin={isLogin} />
      </div>
      <div>
        <section className="bg-gray-100 py-8 px-12">
          <div className="container mx-auto">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart" aria-label="current-page">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="md:py-16">
          <div className="container px-12">
            <div className="flex -mx-4 flex-wrap">
              <div
                className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
                id="shopping-cart"
              >
                <div
                  className="
                flex flex-start
                mb-4
                mt-8
                pb-3
                border-b border-gray-200
                md:border-b-0
              "
                >
                  <h3 className="text-2xl font-semibold">Daftar Sewa Barang</h3>
                </div>

                <div className="border-b border-gray-200 mb-4 hidden md:block">
                  <div className="flex flex-start items-center pb-2 -mx-4">
                    <div className="px-4 flex-none">
                      <div className="" style={{ width: "90px" }}>
                        <h6>Foto</h6>
                      </div>
                    </div>
                    <div className="px-4 w-4/12">
                      <div className="">
                        <h6>Nama Barang</h6>
                      </div>
                    </div>
                    <div className="px-4 w-3/12">
                      <div className="">
                        <h6>Kuantitas</h6>
                      </div>
                    </div>
                    <div className="px-4 w-3/12">
                      <div className="">
                        <h6>Harga</h6>
                      </div>
                    </div>
                    <div className="px-4 w-2/12">
                      <div className="">
                        <h6>Aksi</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {items.map((item) => {
                    return (
                      <div>
                        <div
                          className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                          data-row="1"
                        >
                          <div className="px-4 flex-none">
                            <div
                              className=""
                              style={{ width: "90px", height: "90px" }}
                            >
                              <img
                                src=""
                                alt="chair-1"
                                className="object-cover rounded-xl w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="px-4 w-auto flex-1 md:w-3/12 md:block">
                            <div className="">
                              <h6 className="font-semibold text-lg md:text-xl leading-8">
                                {item.name}
                              </h6>
                              <span className="text-sm md:text-lg">
                                {item.type}
                              </span>
                              <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                Rp{item.price}
                              </h6>
                            </div>
                          </div>
                          <div className="px-4 w-auto flex-none md:flex-1 md:w-3/12 hidden md:block md:text-center">
                            <div className="">
                              <h6 className="font-semibold text-lg">
                                {item.qty}
                              </h6>
                            </div>
                          </div>
                          <div className="px-4 w-auto flex-none md:flex-1 md:w-3/12 hidden md:block md:text-center">
                            <div className="">
                              <h6 className="font-semibold text-lg">
                                Rp{item.price}
                              </h6>
                            </div>
                          </div>
                          <div className="px-4 w-2/12">
                            <div className="">
                              <button
                                className="
                          text-red-600
                          border-none
                          focus:outline-none
                          px-3
                          py-1
                        "
                                onClick={() => {
                                  removeItem(item.id);
                                  getCart();
                                }}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <div>
                  <p className="text-center py-8">
                    Ooops... Cart is empty
                    <a href="details.html" className="underline">
                      Shop Now
                    </a>
                  </p>
                </div> */}
              </div>
              <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
                <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
                  <form onSubmit={submitRent}>
                    <div className="flex flex-start mb-6">
                      <h3 className="text-2xl font-semibold">Detail Events</h3>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label for="complete-name" className="text-sm mb-2">
                        Tanggal Penyewaan
                      </label>
                      <input
                        data-input
                        type="date"
                        id="event-date"
                        name="rent_start"
                        value={rent.rent_start}
                        onChange={inputHandler}
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Masukkan tanggal persiapan acara"
                      />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label for="return-date" className="text-sm mb-2">
                        Tanggal Pengembalian
                      </label>
                      <input
                        data-input
                        type="date"
                        id="tanggal-kembali"
                        name="rent_end"
                        value={rent.rent_end}
                        onChange={inputHandler}
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Masukkan tanggal pengembalian"
                      />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label for="address" className="text-sm mb-2">
                        Lokasi Acara
                      </label>
                      <input
                        data-input
                        type="text"
                        id="address"
                        name="address"
                        value={rent.address}
                        onChange={inputHandler}
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Masukkan Lokasi Acara"
                      />
                    </div>

                    <div className="my-8 flex flex-col gap-2">
                      <div className="flex flex-row justify-between text-sm">
                        <div className="">Total Produk</div>
                        {/* <div>Rp{item.subtotal}</div> */}
                        <div>Rp60000</div>
                      </div>
                      <div className="flex flex-row justify-between text-sm">
                        <div className="">Total Ongkos Kirim</div>
                        {/* <div>Rp{item.delivery}</div> */}
                        <div>Rp12000</div>
                      </div>
                      <div className="flex flex-row justify-between text-sm">
                        <div className="">Biaya Layanan</div>
                        {/* <div>Rp{item.service}</div> */}
                        <div>Rp5000</div>
                      </div>
                      <hr />
                      <div className="flex flex-row justify-between">
                        <div className="text-lg font-semibold read-more">
                          Total
                        </div>
                        {/* <div className="text-lg font-semibold read-more">
                                    Rp{item.total}
                                  </div> */}
                        <div className="text-xl font-semibold read-more">
                          Rp79000
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link
                        to="/proof"
                        type="submit"
                        className="btn-in text-black hover:btn-in hover:opacity-70 focus:outline-none w-full py-3 rounded-full px-6"
                      >
                        Buat Penyewaan
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="mb-12" />
    </div>
  );
}

export default Cart;
