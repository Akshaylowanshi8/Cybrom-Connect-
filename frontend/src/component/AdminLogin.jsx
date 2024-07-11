import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin=()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const Nav=useNavigate();
    const handleSubmit = async(event) => {
      event.preventDefault();
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    let url ="http://localhost:8000/dashboard/AdminLogin"
    await axios
      .post(url,{Email:email,Password:password})
      .then(res =>{
        if(res.data==="Success")
        {
        alert(res.data)
        Nav('/dashboard')

        }
        alert(res.data)
        
      

      }  
    )
      .catch(err => console.error(err));

    };

return(<>

<div className="signin-container py-6 px-7 mt-24 mb-11 text-left">


<form onSubmit={handleSubmit} className="signin-form">
<h1 className="text-center text-xl p-5">welcome Admin Login your world</h1>
        <div className="form-group">
          <label htmlFor="email">Email or phone</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign in</button>
      </form>

</div>

</>)

}  

export default AdminLogin;