import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const data = {
    product: "Mic 18 Watt",
    qty: 1,
    remain: 50000,
    penalty: 0
}

function Returned(){
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <section className="flex py-4 my-8">
                    <Sidebar />
                    <section>
                        <p className="font-semibold text-sm">Product Returned</p>
                        <section className="flex flex-row gap-8 py-3 px-6 mb-4 border rounded-md border-gray-500">
                            <section className="">
                                <img src="" alt="" className="bg-gray-300 rounded-xl w-24 h-20"/>
                            </section>
                            <section className="w-96 mr-48 text-sm">
                                <p className="font-semibold">{data.product}</p>
                                <p>{data.qty}</p>
                            </section>
                            <section className="w-14">
                                <button className="border-2 p-1 rounded-md text-sm">Check</button>
                            </section>
                        </section>

                        <section className="flex flex-row gap-8 py-3 px-6 mb-4 border rounded-md border-gray-500">
                            <section className="">
                                <img src="" alt="" className="bg-gray-300 rounded-xl w-24 h-20"/>
                            </section>
                            <section className="w-96 mr-48 text-sm">
                                <p className="font-semibold">{data.product}</p>
                                <p>{data.qty}</p>
                            </section>
                            <section className="w-14">
                                <button className="border-2 p-1 rounded-md text-sm">Check</button>
                            </section>
                        </section>
                        
                        <section className="flex flex-row gap-8 py-3 px-6 mb-4 border rounded-md border-gray-500">
                            <section className="">
                                <img src="" alt="" className="bg-gray-300 rounded-xl w-24 h-20"/>
                            </section>
                            <section className="w-96 mr-48 text-sm">
                                <p className="font-semibold">{data.product}</p>
                                <p>{data.qty}</p>
                            </section>
                            <section className="w-14">
                                <button className="border-2 p-1 rounded-md text-sm">Check</button>
                            </section>
                        </section>

                        <p className="font-semibold">Repayment Detail</p>
                        <section className="flex justify-between">
                            <p className="text-gray-400">Repayment Method</p>
                            <p className="pr-8">Cash</p>
                        </section>
                        <hr/>
                        <section>
                            <section className="flex justify-between">
                                <p className="text-gray-400">Remaining Payment</p>
                                <p className="pr-8">Rp{data.remain}</p>
                            </section>
                            <section className="flex justify-between">
                                <p className="text-gray-400">Penalties</p>
                                <p className="pr-8">Rp{data.penalty}</p>
                            </section>
                        </section>
                        <hr />
                        <section className="flex justify-between text-blue-600 font-semibold mb-6">
                            <p>TOTAL PAYABLE</p>
                            <p className="pr-8">Rp{data.remain + data.penalty}</p>
                        </section>
                        <section className="flex justify-end">
                            <Link className="btn-in text-white shadow rounded-2xl p-2 px-4 hover:btn-in hover:opacity-90">Konfirmasi</Link>
                        </section>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Returned;