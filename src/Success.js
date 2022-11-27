import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import success from "./asset/success.png";

function Success() {
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar />
        <section class="">
          <div class="container mt-8">
            <div class="flex flex-col items-center justify-center">
              <div class="w-full md:w-4/12 text-center">
                <img
                  src={success}
                  alt="Admin Approvement"
                  className="w-9/12 mx-auto mb-8"
                />
                <h2 class="text-3xl font-semibold mb-6">
                  Yay, Penyewaan Kamu Sukses{" "}
                </h2>
                <p class="text-lg mb-12">
                  Penyewaan yang anda lakukan sekarang menjadi prioritas kami.
                  Tunggu konfirmasi pembayaran admin di WA Kamu dalam 24 Jam untuk
                  mendapatkan kontak penanggung jawab
                </p>
                <Link
                  to="/"
                  class="
                  btn-in
                  focus:outline-none
                  w-full
                  py-3
                  rounded-full
                  text-lg
                  transition-all
                  duration-200
                  px-8
                  cursor-pointer
                  hover:btn-in hover:opacity-70
                "
                >
                  Kembali Menyewa
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="mb-12" />      
    </div>
  );
}

export default Success;
