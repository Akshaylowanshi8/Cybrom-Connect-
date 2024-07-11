

import Landing from "./assets/landing.jpg"

const Header=()=>{
return(<>



<section className="left">
    <div className="fronttitle">
<h1>Welcome to your </h1>
<h1>professional community</h1>
</div>


<div>
    <div>
        <button className="custom-button">Sign with Google</button>
    </div>
    <div className="btn">
        <button className="custom-button">Sign with Email</button>
    </div>
</div>



<div>
    <span class="agreement-text">By clicking Continue to join or sign in, you agree to LinkedIn’s User<br/> Agreement, Privacy Policy, and Cookie Policy.</span>
</div>
<div>
    <span class="new-to-linkedin">New to LinkedIn?</span> <a href="#" class="join-now">Join now</a>
</div>

</section>



<section className="right">
  <div className="image-container">
    <div>
      <img className="img" width="450px" src={Landing} />
    </div>
    <div className="imgtitle">
      <span className="centered-text">Find your job </span>
    </div>
  </div>
</section>



</>)

}
export default Header