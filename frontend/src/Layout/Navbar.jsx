import { Link } from "react-router-dom";

const Navbar=()=>{

return(<>


<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-9 py-4 sm:px-6 lg:px-8 scale-110">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-9 w-auto" src="\src\assets\cclogos.png" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
        
          <div className="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white  hover:bg-gray-700 hover:text-white" aria-current="page" to="home">Home</Link>
            <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white  hover:bg-gray-700 hover:text-white" aria-current="page" to="">About</Link>
            <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white  hover:bg-gray-700 hover:text-white" aria-current="page" to="">Jobs</Link>
            <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white  hover:bg-gray-700 hover:text-white" aria-current="page" to="login">Login</Link>
          </div>
        </div>
      </div>
     
      </div>



</nav>
</>)

}

export default Navbar;