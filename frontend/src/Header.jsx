

import Landing from "./assets/landing.jpg"

const Header=()=>{
return(<>


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