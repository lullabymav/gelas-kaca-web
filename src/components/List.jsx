import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Login from "./../asset/login-pic.png"

const data = {
    price: 165000,
    qty: 4,
    //subtotal: 165000
    prodId: "12S45LAO5126",
    product: "Mic 18 watt",
    date: "13 Oct 2022",
    pesanan: 2,
    totalProd: 13200000,
    ship: 12000,
    service: 5000,
    //totalPay: 
}

function List(){
    return(
        <div>
            <div className="my-8 mx-12">
                <Navbar />
                <section className="mt-8">
                    <p>Produk Dipesan</p>
                    <section className="my-4 flex flex-col gap-8">
                        <section className="flex flex-row text-center font-semibold">
                            <p className="basis-1/2">Order No</p>
                            <p className="basis-1/6">Harga Satuan</p>
                            <p className="basis-1/6">Jumlah</p>
                            <p className="basis-1/6">Subtotal Produk</p>
                        </section>
                        <section className="flex flex-row">
                            <section className="basis-1/2">
                                <section className="flex flex-row gap-6 mx-8">
                                    <img src={Login} className="w-28 h-20 bg-gray-200 rounded-lg" alt="" />
                                    <section className="flex flex-col justify-center gap-1">
                                        <p>{data.prodId}</p>
                                        <p className="font-semibold">{data.product}</p>
                                        <p>Delivery on: {data.date}</p>
                                    </section>
                                </section>
                            </section>
                            <p className="basis-1/6 text-center">Rp{data.price}</p>
                            <p className="basis-1/6 text-center">{data.qty}</p>
                            <p className="basis-1/6 text-center">Rp{data.price * data.qty}</p>
                        </section>
                        <section className="flex flex-row">
                            <section className="basis-1/2">
                                <section className="flex flex-row gap-4 mx-8">
                                    <img src="" className="w-28 h-20 bg-gray-200 rounded-lg" alt="" />
                                    <section className="flex flex-col justify-center gap-1">
                                        <p>{data.prodId}</p>
                                        <p className="font-semibold">{data.product}</p>
                                        <p>Delivery on: {data.date}</p>
                                    </section>
                                </section>
                            </section>
                            <p className="basis-1/6 text-center">Rp{data.price}</p>
                            <p className="basis-1/6 text-center">{data.qty}</p>
                            <p className="basis-1/6 text-center">Rp{data.price * data.qty}</p>
                        </section>
                        <section className="my-4 flex justify-between mr-12">
                            <section>
                                <label className="font-semibold">Pesan: </label>
                                <input type="text" className="text-sm w-72 border-2 p-1 ml-2" placeholder="(Optional) tinggalkan pesan"/>
                            </section>
                            <section className="flex">
                                <p>Total Pesanan ({data.pesanan}) :</p>
                                <p className="font-semibold text-blue-600 ml-2">Rp{data.totalProd}</p>
                            </section>
                        </section>
                    </section>
                </section>
                <hr />
                <section className="my-4">
                    <p className="font-semibold">Metode Pembayaran</p>
                    <section className="grid grid-cols-3 gap-6 mt-4 mb-6 mx-20">
                        <button className="border-2 p-1 hover:shadow-sm">COD (Bayar di Tempat)</button>
                        <button className="border-2 p-1 hover:shadow-sm">Transfer Bank</button>
                        <button className="border-2 p-1 hover:shadow-sm">Bayar Tunai di Mitra/Agen</button>
                        <button className="border-2 p-1 hover:shadow-sm">Kartu Kredit/Debit</button>
                    </section>
                </section>
                <hr />
                <section className="mt-8 flex flex-col gap-6 mr-12">
                    <section className="flex flex-row gap-12 justify-end place-items-center">
                        <section className="flex flex-col gap-4 font-semibold">
                            <p>Total Produk</p>
                            <p>Total Ongkos Kirim</p>
                            <p>Biaya Layanan</p>
                            <p>Total Pembayaran</p>
                        </section>
                        <section className="flex flex-col gap-4 text-end">
                            <p>Rp{data.totalProd}</p>
                            <p>Rp{data.ship}</p>
                            <p>Rp{data.service}</p>
                            <p className="font-semibold text-2xl text-blue-600">Rp{data.totalProd + data.ship + data.service}</p>
                        </section>
                    </section>
                    <section className="">
                        <Link to="/proof" className="btn-in float-right w-80 text-center font-semibold py-3 rounded-2xl transition-all duration-200 px-8 mr-2 cursor-pointer hover:btn-in hover:opacity-70">Buat Pesanan</Link>
                    </section>
                </section>
            </div>
            <Footer className="mb-12"/>
        </div>
    )
}

export default List;