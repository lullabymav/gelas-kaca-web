import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const data = {
    id: "A0001",
    product: "xxxxxxxxxxxxxxxxxx",
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
                            <p>1. {data.product}</p>
                            <p>2. {data.product}</p>
                            <p>3. {data.product}</p>
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
                        <section className="bg-gray-300 rounded-3xl p-2 px-4 my-3">
                            <input type="file" accept="image/png, image/jpg, image/jpeg"/>
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