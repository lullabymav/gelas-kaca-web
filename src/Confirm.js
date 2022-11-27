import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import approve from "./asset/approve.png";

function Confirm() {
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar />
      </div>
      <section class="">
        <div class="container">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full md:w-4/12 text-center">
              <img
                src={approve}
                alt="Admin Approvement"
                className="w-9/12 mx-auto mb-8"
              />
              <h2 class="text-3xl font-semibold mb-6">
                Penyewaan Kamu sedang dikonfimasi{" "}
              </h2>
              <p class="text-lg mb-12">
                Penyewaan yang anda lakukan sekarang sedang dikonfimasi oleh
                admin. Tunggu konfirmasi admin dalam 24 Jam untuk melakukan
                pembayaran
              </p>
              <Link
                to="/history"
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
              "
              >
                Lihat Status
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer className="mb-12" />
    </div>
  );
}

export default Confirm;
