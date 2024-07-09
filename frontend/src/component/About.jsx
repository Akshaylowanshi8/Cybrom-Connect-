import img from "../assets/about.png";
import img2 from "../assets/3.png";
const About=()=>{
  return(
    <>
    <div className="about">
        <div className="about1">
        <h1 className="tag">Cybrom Connect</h1>
       <div className="tag1"> Codemithra is a leading education and placement platform that helps
         students
         achieve certification and get placements in large MNCs.
            <br />
        We help students improve their aptitude skills,
        communication and interpersonal abilities thus making them industry-ready.
        </div>
        </div>
      <div>
      <img src={img2} alt="" />
      </div>
        <div>
          <img src={img} alt="" />
        </div>
     
    </div>
    </>
  )


}
export default About;