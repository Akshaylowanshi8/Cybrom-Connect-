import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./Layout/Navbar";
const Layout=()=>{
    return(<>
<div className="bg-transparent shadow-sm  justify-evenly text-center  text-2xl align-middle flex play">
<div className="">
<img/>
</div>
<Navbar />
<Outlet />
<Footer />
    </>)

}


export default Layout;