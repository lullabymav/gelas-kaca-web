import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Related from "./components/Related";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
// const data = {
//   productName: "Speaker Kecil Beta Three",
//   productPrice: "1.000.000",
//   productDesc:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi eros, mattis eu magna sed, posuere laoreet dui. Vestibulum auctor luctus arcu id tristique. Donec interdum placerat eleifend. Sed et nibh nisl. Donec lacinia tortor porta dui rutrum mattis. Nullam fermentum urna dignissim dapibus cursus. Sed lacinia justo in mi mattis, id laoreet est gravida.",
//   productSpec: [
//     {
//       Merk: "Beta Three",
//       Watt: "24 Watt",
//       Voltase: "240 V",
//       Bluetooth: "No",
//       AudioCrossover: "2 Way",
//       Sensitivitas: "128 dB",
//       KoneksiInput: "Jack Akai",
//       MinimumFrekuensi: "52 Hz"
//     }
//   ],
//   productNote:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi eros, mattis eu magna sed, posuere laoreet dui. Vestibulum auctor luctus arcu id tristique. Donec interdum placerat eleifend. Sed et nibh nisl. Donec lacinia tortor porta dui rutrum mattis. Nullam fermentum urna dignissim dapibus cursus. Sed lacinia justo in mi mattis, id laoreet est gravida.",

// };

const initialState = 1;

function ProductDetail({ token, cartId }) {
  const { id } = useParams();
  const [gallery, setGallery] = useState({});
  const [detail, setDetail] = useState([]);
  const [qty, setQty] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});

  const getDataToken = async () => {
    try {
      const decoded = await jwtDecode(token);
      setUserData(await decoded);
      setIsLogin(true);
    } catch {
      navigate("/login");
    }
  };

  let firstName = String(userData.name).split(" ")[0];

  const getDetail = async () => {
    try {
      await axios
        .get(`http://localhost:8080/api/products/${id}`)
        .then((res) => {
          setDetail(() => res.data);
          setGallery(res.data.productGalleries[0]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async () => {
    try {
      const data = {
        cartId: cartId,
        qty: qty,
      };
      await axios
        .put(`http://localhost:8080/api/products/${id}`, data)
        .then((res) => {
          console.log(res);
          navigate("/cart");
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataToken();
    getDetail();
  }, []);
  console.log(detail);
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar name={firstName} isLogin={isLogin} />
      </div>

      <div>
        <div>
          <section className="bg-gray-100 py-8 px-12">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Category</Link>
                </li>
                <li>
                  <Link to="#" aria-label="current-page">
                    Details
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className="container px-12">
          <div className="flex flex-wrap gap-3 my-4 md:my-12 text-left">
            <div className="w-full md:hidden px-4">
              <h2 className="text-5xl font-semibold">{detail.name}</h2>
              <span className="text-xl">Rp {detail.price}</span>
            </div>
            <div className="flex-1">
              <div className="slider">
                <div className="preview">
                  <div className="item rounded-lg h-full overflow-hidden">
                    <img
                      src={gallery.path}
                      alt="front"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4 md:p-6">
              <h2 className="text-5xl font-semibold mb-8">{detail.name}</h2>
              <p className="text-xl">Rp {detail.price}</p>
              <hr className="my-8" />

              <h6 className="text-xl font-semibold mb-4">Tentang Barang</h6>
              <p className="text-xl leading-7 mb-6">
                {detail.desc}
                <Link onClick={() => setShowModal(true)} className="read-more">
                  {" "}
                  <br />
                  Read More....
                </Link>
              </p>

              {showModal ? (
                <>
                  <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-1/2 my-6 mx-auto">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            {detail.name}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="mt-4 mb-2 text-lg font-semibold leading-relaxed">
                            Deskripsi Produk
                          </p>
                          <p className="text-slate-500 leading-relaxed">
                            {detail.productDesc}
                          </p>
                        </div>
                        <div className="relative p-6 flex-auto">
                          <p className="mb-2 text-lg font-semibold leading-relaxed">
                            Spesifikasi Produk
                          </p>
                          <p className="mb-2 text-slate-500 leading-relaxed">
                            {detail.desc}
                          </p>
                        </div>
                        <div className="relative p-6 flex-auto">
                          <p className="mb-2 text-lg font-semibold leading-relaxed">
                            Penting untuk Diketahui
                          </p>
                          <p className="mb-2 text-slate-500 leading-relaxed">
                            {detail.note}
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

              <div className="flex flex-row gap-4 items-center">
                <h6 className="text-lg font-medium my-4">Kuantitas :</h6>
                <div className="border rounded-full w-32 text-center">
                  <button
                    className="text-lg font-semibold mx-2"
                    onClick={() => {
                      if (qty >= 1) {
                        setQty(qty - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <button className="text-lg font-semibold mx-2">{qty}</button>
                  <button
                    className="text-lg font-semibold mx-2"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <section className="flex gap-4">
                <Link to="/cart">
                  <button className="transition-all duration-200 btn-up rounded-full px-8 py-1 mt-4 inline-flex hover:btn-in hover:opacity-70">
                    Tambahkan ke Keranjang
                  </button>
                </Link>
                <button
                  className="transition-all duration-200 btn-in rounded-full px-8 py-1 mt-4 inline-flex hover:btn-in hover:opacity-70"
                  onClick={addToCart}
                >
                  Sewa Sekarang
                </button>
              </section>
            </div>
          </div>
        </section>
        <Related />
      </div>
      <Footer className="mb-12" />
    </div>
  );
}

export default ProductDetail;
