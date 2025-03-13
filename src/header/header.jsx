import { MdOutlineHelp } from "react-icons/md";

function Header(){

    return(
       
    <header>
        <div className="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMocYUKafPSKtpnKBGv4CZDKFm4P2w8Xr-yw&s" alt="logo" width="50px"/>
            <input type="search" placeholder="Search..."></input>
            <a href=""><MdOutlineHelp /></a>
        </div>
    </header>

    )
}

export default Header