import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HistoryNavbar from "./HistoryNavbar";
import HistoryUpcoming from "./HistoryUpcoming";

function History(){
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />

                <section className="flex py-4 my-8">
                    <Sidebar />
                    <section>
                        <HistoryNavbar />
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

export default History;