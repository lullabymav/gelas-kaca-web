import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const data = {
    id: "A0001",
    productList: ["Speaker Kecil", "Mic 18 Watt", "Audio Mixer"],
    bank: "BRI",
    bankNumber: "00000000000000"
}

function Proof() {
    return(
        <div className='my-8 mx-12'>
            <Navbar/>
            <div className="mx-80">
                <section className="text-center">
                    <h1 className="font-semibold text-2xl mt-8 mb-6">Konfirmasi Pembayaran</h1>
                    <section className="text-lg">
                        <h2>Upload Bukti Pembayaranmu</h2>
                        <h2>untuk Kami Konfirmasi</h2>
                    </section>
                </section>
                <section className="bg-gray-100 w-9/12 h-auto mx-auto mt-4 rounded-2xl p-6">
                    <h4 className="font-semibold text-lg mb-3">Rincian Penyewaan</h4>
                    <section className="flex flex-col gap-2 text-sm">
                        <section className="flex flex-row">
                            <p className="w-3/5">No. Sewa</p>
                            <p className="mr-1">:</p>
                            <p>{data.id}</p>
                        </section>
                        <section className="flex flex-row">
                            <p className="w-3/5 font-medium">Daftar Barang yang Disewa</p>
                            <p className="mr-1">:</p>
                        </section>
                        <section>
                            <ol type="1">
                            {data.productList.map((item, index) => {
                                return (
                                <li>
                                    {index + 1}. {item}
                                </li>
                                );
                            })}
                            </ol>
                        </section>
                        <p className="font-medium my-2">Payment Details :</p>
                        <section className="flex flex-row">
                            <p className="w-3/5">Bank Transfer</p>
                            <p className="mr-1">:</p>
                            <p>{data.bank}</p>
                        </section>
                        <section className="flex flex-row">
                            <p className="w-3/5">Nomor Rekening</p>
                            <p className="mr-1">:</p>
                            <p>{data.bankNumber}</p>
                        </section>
                        <section class="flex items-center justify-center w-full my-2">
                            <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">Klik</span> atau drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">JPG atau PNG</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </section>
                        <Link to="/success" class="btn-in text-center font-semibold w-full py-3 rounded-full transition-all duration-200 px-8 cursor-pointer hover:btn-in hover:opacity-70">
                            Kirim & Konfirmasi
                        </Link>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Proof;