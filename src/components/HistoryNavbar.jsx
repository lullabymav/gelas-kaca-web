import { Link } from "react-router-dom";

function HistoryNavbar(){
    return(
        <nav className="mb-12">
            <ul className="grid grid-cols-5 gap-24 text-sm">
                <li className="hover:text-blue-600 hover:underline">
                    <Link to="/checking">
                    Checking
                    </Link>
                </li>
                <li className="hover:text-blue-600 hover:underline">
                    <Link to="/upcoming">
                    Upcoming
                    </Link>
                </li>
                <li className="hover:text-blue-600 hover:underline">
                    <Link to="completed">
                    Completed
                    </Link>
                </li>
                <li className="hover:text-blue-600 hover:underline">
                    <Link to="cancelled">
                    Cancelled
                    </Link>
                </li>
                <li className="hover:text-blue-600 hover:underline">
                    <Link to="returned">
                    Returned
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default HistoryNavbar