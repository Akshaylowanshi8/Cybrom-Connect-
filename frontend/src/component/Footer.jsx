import React from 'react'
import logo from "../assets/cc logo.jpg";

const Footer = () => {
  return (
    <div>
       <footer>
        <div id="row">
        <img id="logo" src={logo}/><br/>
            <div id="col">
                
                <h1>General <div id="under-line"><span></span></div></h1>
              
               <li>Sign Up</li>
               <li>Help Center</li>
               <li>About</li>
               <li>Press</li>
               <li>Blog</li>
               <li>Careers</li>
               <li>Developers</li>
            </div>
          
            <div id="col">
                <h1>Browse LinkedIn <div id="under-line"><span></span></div></h1>
            
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                
            </div>
            <div id="col">
                <h1>Business Solutions <div id="under-line"><span></span></div></h1>
            
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                
            </div>
            <div id="col">
                <h1>Directories <div id="under-line"><span></span></div></h1>
              
                <div id="social-icons">
                   <li> Members</li>
                   <li>Jobs</li>
                   <li>Companies</li>
                   <li>Featured</li>
                   <li> Learning</li>
                   <li> Posts</li>
                   <li>Articles</li>
                </div>
            </div>
        </div>
        <hr/>
        <p id="coright">Easy for use my website 0 2023 . All Right Reseved</p>
    </footer>
    </div>
  )
}

export default Footer