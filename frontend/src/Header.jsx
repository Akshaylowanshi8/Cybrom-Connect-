import Home4 from "./assets/home4.png"
import Home3 from "./assets/home3.png" 
import Home2 from "./assets/home2.png"
import Home from "./assets/homepage.png"
import Landing from "./assets/th.jpeg"

const Header=()=>{
return(<>

<div className="toporder">
    <div className="firstorder">
      <div className="order">
        <h1>100% Satusfaction Gurantee</h1> 
        <span className="find">Find Your Perfect <br />
        Course</span>  
        <div className="from">Choose from over 210,000 online video courses with new
           additions<br /> Published every month ourses and learn how to code.</div>
      </div>
    </div>
    <div className="image">
      <div className="display">
      <img className="img3" width="300px" src={Home} />
      <img className="img4" width="300px" src={Home2} />
      </div>
      {/* <div className="display"> */}
       <div className="display">
      <img className="img4" width="300px" src={Home3} />
      <img className="img5" width="300px" src={Home4} />
      </div>
    {/* </div> */}
    </div>
</div>

<div className="left">
<section className="left1">
    <div className="fronttitle">
<h1>Welcome to your </h1>
<h1>professional community</h1>
</div>


<div className="btn">
    <div>
        <button className="custom-button">Sign with Google</button>
    </div>
    <div >
        <button className="custom-button">Sign with Email</button><span className="centered-text">Find your job </span>
    </div>
</div>



<div class="agreement-text">
    <span >By clicking Continue to join or sign in, you agree to LinkedIn’s User<br/> Agreement, Privacy Policy, and Cookie Policy.</span>
</div>
<div class="new-to-linkedin">
    <span >New to LinkedIn?</span> <a href="#" class="join-now">Join now</a>
</div>

</section>



<section className="right">
  <div className="image-container">
    <div>
      <img className="img" width="600px" src={Landing} />
    </div>
    <div className="imgtitle">
      {/* <span className="centered-text">Find your job </span> */}
    </div>
  </div>
</section>
</div>


</>)

}
export default Header