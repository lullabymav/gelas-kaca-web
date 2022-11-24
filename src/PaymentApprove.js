import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sewaList = {
  id: "A0001",
  productList: ["Speaker Kecil", "Mic 18 Watt", "Audio Mixer"],
  bank: "BRI",
  total: 80000,
};

function Approve() {
  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar />
      </div>
      <div>
        <div className="font-semibold text-4xl text-center mb-8">
          Konfirmasi Pembayaran
        </div>
        <div className="text-3xl text-center mb-12">
          Upload Bukti Pembayaran mu <br />
          untuk kami konfirmasi
        </div>
        <div className="flex items-center justify-center">
          <div className="card h-max w-128 rounded-3xl">
            <div className="px-8">
              <div className="pt-8 font-semibold text-lg">
                Rincian Penyewaan
              </div>
              <div>
                No. Sewa <span className="ml-8">: {sewaList.id}</span>
              </div>
              <div className="mt-4">
                <div className="font-semibold text-lg">
                  Daftar product yang disewa
                </div>
                <ol type="1">
                  {sewaList.productList.map((item, index) => {
                    return (
                      <li>
                        {index + 1}. {item}
                      </li>
                    );
                  })}
                </ol>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium">Detail Pembayaran</h3>
                <div>
                  Bank Tujuan <span className="ml-8">: {sewaList.bank}</span>
                </div>
                <div className="mb-2">
                  Total Pembayaran{" "}
                  <span className="ml-8">: {sewaList.total}</span>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Klik</span> atau drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      JPG atau PNG
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div className="my-8">
                <Link to="/success">
                  <button className="btn-in h-8 w-full rounded-full text-center">
                    Kirim & Konfirmasi
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer className="mb-12" />
    </div>
  );
}

export default Approve;
