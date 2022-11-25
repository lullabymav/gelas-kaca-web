import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HistoryNavbar from "./HistoryNavbar";
import pic from "./../asset/login-pic.png"

function HistoryUpcoming(){
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />

                <section className="flex py-4 my-8">
                    <Sidebar />
                    <section>
                        <HistoryNavbar />
                        <div className="upcomingCard px-3 mb-8">
                            <section className="flex gap-20 mb-3 text-sm orderNumber">
                                <p className="ml-2">Order No.</p>
                                <p>123456</p>
                            </section>
                            <section className="flex gap-8">
                                <img src={pic} className="w-28 h-24 rounded-xl bg-gray-300 border-transparent" alt="" />
                                <section className="grid grid-rows-3 py-1">
                                    <p className="items-center font-semibold">Mic 18 Watt</p> 
                                    <p className="text-gray-500">X items</p>
                                    <p>Delivery on : 13 December 2022</p>
                                </section>
                            </section>
                        </div>
                        <div className="upcomingCard gpx-3 mb-8">
                            <section className="flex gap-20 mb-3 text-sm orderNumber">
                                <p className="ml-2">Order No.</p>
                                <p>123456</p>
                            </section>
                            <section className="flex gap-8">
                                <img src={pic} className="w-28 h-24 rounded-xl bg-gray-300 border-transparent" alt="" />
                                <section className="grid grid-rows-3 py-1">
                                    <p className="items-center font-semibold">Mic 18 Watt</p> 
                                    <p className="text-gray-500">X items</p>
                                    <p>Delivery on : 13 December 2022</p>
                                </section>
                            </section>
                        </div>
                    </section>
                </section>
            </div>
            <footer>
                <hr />
                <Footer />
            </footer>
        </div>
        
        
    )
}

export default HistoryUpcoming;