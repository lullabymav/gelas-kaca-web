import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Related from "./components/Related";
import { Link } from "react-router-dom";
import { useState } from "react";

const data = {
  productName: "Speaker Kecil Beta Three",
  productPrice: "1.000.000",
  productDesc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi eros, mattis eu magna sed, posuere laoreet dui. Vestibulum auctor luctus arcu id tristique. Donec interdum placerat eleifend. Sed et nibh nisl. Donec lacinia tortor porta dui rutrum mattis. Nullam fermentum urna dignissim dapibus cursus. Sed lacinia justo in mi mattis, id laoreet est gravida.",
};

const initialState = 1;
function ProductDetail() {
  const [qty, setQty] = useState(initialState);
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar />
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
                <h2 className="text-5xl font-semibold">{data.productName}</h2>
                <span className="text-xl">Rp {data.productPrice}</span>
              </div>
              <div className="flex-1">
                <div className="slider">
                  <div className="thumbnail">
                    <div className="px-2">
                      <div>
                        <img
                          src=""
                          alt="front"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="preview">
                    <div className="item rounded-lg h-full overflow-hidden">
                      <img
                        src=""
                        alt="front"
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-4 md:p-6">
                <h2 className="text-5xl font-semibold mb-8">
                  {data.productName}
                </h2>
                <p className="text-xl">Rp {data.productPrice}</p>
                <hr className="my-8" />

                <h6 className="text-xl font-semibold mb-4">Tentang Barang</h6>
                <p className="text-xl leading-7 mb-6">
                  {data.productDesc}
                  <Link to="/rincian" className="read-more">
                    {" "}
                    Baca Lebih Lanjut
                  </Link>
                </p>
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

                <Link to="/cart">
                  <button
                    className="transition-all duration-200 btn-in rounded-full px-8 py-3 mt-4 inline-flex hover:btn-in hover:opacity-70">
                    Tambahkan ke Keranjang
                  </button>
                </Link>
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
