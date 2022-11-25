import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <aside class="w-56 mr-5" aria-label="Sidebar">
            <div class="overflow-y-auto px-3">
                <div className="flex gap-4 mb-6">
                    <img src="" className="w-12 h-12 rounded-full bg-gray-300" alt="" />
                    <section>
                        <p className="font-semibold">Andrew</p>
                        <Link to="/profile">
                            <p className="text-gray-500 text-sm">Edit Profile</p>
                        </Link>
                    </section>
                </div>
                <ul class="space-y-2">
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-1 font-semibold text-lg">My Account</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-1 font-semibold text-lg">My Rental</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-1 font-semibold text-lg">Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-2 font-semibold text-lg">My Vouchers</span>
                        </Link>
                    </li>
                </ul>
            </div>  
        </aside>
    )
}

export default Sidebar;