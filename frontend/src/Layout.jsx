import { Link, Outlet } from "react-router-dom";

import { MdWork } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Home from './Home';
import Footer from "./component/Footer";
const Layout=()=>{
    return(<>
<div className="bg-transparent shadow-sm  justify-evenly text-center  text-2xl align-middle flex play">
<div className="">
<img/>
</div>

<div class="relative overflow-hidden">
                    <img class="object-cover w-full bg-white h-full" src="\src\assets\cclogos.png" className="p-4" width={200} alt="Product" />
                    <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                </div>

                

<ul className="flex align-middle pt-10 gap-7">
    <li className="">
    <IoHome /><Link to="home">Home</Link></li>
    <li className=""><h1 className=""><MdWork /></h1><Link to="home">Jobs</Link></li>
    
    <li className=""><IoHome /><Link to="home">shop</Link></li>
  <li className=""><IoHome /><Link to="home"></Link></li>
  <li className=""><Link to="login">Login</Link></li>

</ul>

<div className=""></div>

</div>


<Outlet />

<Footer />
    </>)

}


export default Layout;