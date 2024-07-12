import img from "../assets/about.png";
import img2 from "../assets/3.png";

import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
const About=()=>{
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return(
    <>
    <div className="about">
        <div className="about1">
        <h1 className="tag">
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
        <h1 className="tag">Cybrom Connect</h1>
       <div className="tag1 p-7"> Codemithra is a leading education and placement platform that helps
         students
         achieve certification and get placements in large MNCs.
            <br />
        We help students improve their aptitude skills,
        communication and interpersonal abilities thus making them industry-ready.
        </div>
        </div>
      <div >
      <img className="h-[400px] mt-11 ml-40 absolute" src={img} alt="" />

      <img src={img2} alt="" />

      </div>
        <div >
        </div>
     
    </div>
    </>
  )


}
export default About;