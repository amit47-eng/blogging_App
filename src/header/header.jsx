import { MdOutlineHelp } from "react-icons/md";
import Navbar from './navbar';

function Header() {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="flex items-center justify-between flex-wrap">
                <a href="/" className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMocYUKafPSKtpnKBGv4CZDKFm4P2w8Xr-yw&s" alt="logo" width="50px" className="rounded-full"/>
                </a>
                <Navbar />
                <div className="flex items-center space-x-4">
                    <input type="search" placeholder="Search..." className="p-2 rounded border border-gray-300"/>
                    <a href="#" className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600"><MdOutlineHelp /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;