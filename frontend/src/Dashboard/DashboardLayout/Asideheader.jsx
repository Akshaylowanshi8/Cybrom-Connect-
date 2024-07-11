import React from "react";
import { Link,Outlet } from "react-router-dom";
import "../Dashboard.assets/css/adminhome.css"
import logo from "../Dashboard.assets/Img/dashlogo.jpg"
const AdminHome = ()=>{
    return(
        <>
        <aside id="aside">
          <div id="aside-heading">
            <img 
               src={logo} 
              alt="Logo" 
            />
            <h2>Admin</h2> 
            <hr style={{marginTop:"20px"}}/>
            <Link className="desh-link" to="uploadtech">uploadtech</Link>
            <Link className="desh-link" to="alltech" >All Technology</Link>
            
          </div>
        </aside>
        <nav id="nav">Hello
          <div style={{position:"absolute",right:"50px"}}>
            <Link className="desh-link" to="adminlogin" >Admin</Link>
            
          </div>
            
        </nav>
        <Outlet />
      </>
    )
}

export default AdminHome;
