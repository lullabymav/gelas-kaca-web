import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HistoryNavbar from "./HistoryNavbar";
import logo from "./../asset/login-pic.png"

const items = [
    {
        id: "223SDJ34",
        name: "Speaker Kecil", 
        // pic: "./../asset/login-pic.png",
        type: "Sound System",
        kuantitas: 1,
        date: "13/12/2022",
        status: "UPCOMING",
    }
]

function History(){
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />

                <section className="flex py-4 my-8">
                    <Sidebar />
                    <section>
                        <HistoryNavbar />
                        <div>
                            {items.map((item) => {
                                return(
                                    <div>
                                        <ul className="flex flex-row gap-2 items-center text-center text-sm">
                                            <li id="idx" className="flex-none w-20">
                                                {item.id}
                                            </li>
                                            <li id="pic" className="flex-none w-32">
                                                {item.pic}
                                            </li>
                                            <li id="name" className="flex-none w-40">
                                                {item.name}
                                                <br />
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {item.type}
                                                </p>
                                            </li>
                                            <li id="qty" className="flex-none w-20">
                                                {item.kuantitas}
                                            </li>
                                            <li id="date" className="flex-none w-28">
                                                {item.date}
                                            </li>
                                            <li id="status" className="flex-none w-28">
                                                {item.status}
                                            </li>
                                            <li id="action" className="flex-none w-auto">
                                                <div className="flex gap-2">
                                                    <Link to="/list" className="w-auto btn-in text-white shadow rounded-2xl p-2 hover:btn-in hover:opacity-90">Process Lanjut</Link>
                                                    <button className="w-auto border border-black shadow rounded-2xl p-2 hover:btn-in hover:shadow-md">Bantuan</button>
                                                    {/* <Link to="/return" className="w-auto bg-red-600 text-white shadow rounded-2xl p-2 px-3 hover:btn-in hover:opacity-90">Returned</Link> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default History;