import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const items = [
  {
    id: 1,
    name: "Speaker Kecil",
    type: "Sound System",
    kuantitas: 1,
    price: 50000,
  },
];

function Cart() {
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar />
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
                        <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="1">
                          <div className="px-4 flex-none">
                            <div className="" style={{ width: "90px", height: "90px" }}>
                              <img src="" alt="chair-1" className="object-cover rounded-xl w-full h-full"/>
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
                                {item.kuantitas}
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
                  <form>
                    <div className="flex flex-start mb-6">
                      <h3 className="text-2xl font-semibold">Detail Events</h3>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label for="complete-name" className="text-sm mb-2">
                        Tanggal Persiapan
                      </label>
                      <input
                        data-input
                        type="date"
                        id="event-date"
                        className="
                      border-gray-200 border
                      rounded-lg
                      px-4
                      py-2
                      bg-white
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
                        placeholder="Masukkan tanggal persiapan acara"
                      />
                    </div>

                    <div className="flex flex-col mb-4">
                      <label for="return-date" className="text-sm mb-2">
                        Tanggal Kembali
                      </label>
                      <input
                        data-input
                        type="date"
                        id="tanggal-kemblai"
                        className="
                      border-gray-200 border
                      rounded-lg
                      px-4
                      py-2
                      bg-white
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
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
                        className="
                      border-gray-200 border
                      rounded-lg
                      px-4
                      py-2
                      bg-white
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
                        placeholder="Masukkan Lokasi Acara"
                      />
                    </div>
                  </form>
                  <div className="my-8">
                    <div className="flex flex-row justify-between">
                      <div className="">Subtotal</div>
                      <div>Rp50.000</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="">Delivery Fee</div>
                      <div>Rp30.000</div>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                      <div className="text-lg font-semibold read-more">
                        Total
                      </div>
                      <div className="text-lg font-semibold read-more">
                        Rp80.000
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/confirm"
                      type="submit"
                      className="
                    btn-in
                    text-black
                    hover:btn-in hover:opacity-70
                    focus:outline-none
                    w-full
                    py-3
                    rounded-full
                    text-lg
                    px-6
                  "
                    >
                      Ajukan Sewa
                    </Link>
                  </div>
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
