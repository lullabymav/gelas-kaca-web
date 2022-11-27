import { Link } from "react-router-dom";

function HistoryNavbar(){
    return(
        <nav className="mb-12">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="idx" className="flex-none w-20">
                    #
                </li>
                <li id="pic" className="flex-none w-32">
                    Cover
                </li>
                <li id="name" className="flex-none w-40">
                    Name
                </li>
                <li id="qty" className="felx-none w-20">
                    Qty
                </li>
                <li id="date" className="flex-none w-28">
                    Date
                </li>
                <li id="status" className="flex-none w-28">
                    Status
                </li>
                <li id="action" className="flex-none w-auto">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default HistoryNavbar