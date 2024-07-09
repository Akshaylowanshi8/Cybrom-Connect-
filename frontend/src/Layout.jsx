import { Outlet } from "react-router-dom";

import Footer from "./component/Footer";
import Navbar from "./Layout/Navbar";
const Layout=()=>{
    return(<>
<Navbar />
<Outlet />
<Footer />
    </>)

}


export default Layout;