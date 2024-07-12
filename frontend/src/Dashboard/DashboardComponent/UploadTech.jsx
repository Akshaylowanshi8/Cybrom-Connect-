import { useState } from "react";
import axios from "axios";
import "../Dashboard.assets/css/uploadtech.css"
const UploadTech = () => {
  const [tech, setTech] = useState({});
  const [techfile, setTechfile] = useState([]);

  const Techinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTech((values) => ({ ...values, [name]: value }));
  };

  const Techfileinput = (e)=>{
    setTechfile(e.target.files);
  }
  const SubmitAction = () => {
    let url = "http://localhost:8000/dashboard/uploadtech";
    console.log(tech);
    axios.post(url, tech,techfile)
    console.log()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error uploading technology:', error);
      });
  };

  return (
    <div className="Upload-main-div">
      <form action="">
        <label htmlFor="Tname">Technology Title</label>
        <input name="Tname" id="Tname" type="text" onChange={Techinput} /><br /><br />
        <label htmlFor="Ttachnology">Technology</label>
                <select id="Ttachnology" name="Ttachnology" onChange={Techinput}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="python">Python</option>
                    <option value="mern">MERN</option>
                    <option value="java">JAVA</option>
                    <option value="php">PHP</option>
                    <option value="javascript">JavaScript</option>
                    <option value="mongodb">MongoDB</option>
                </select><br /><br />
        <label htmlFor="Tprice">Technology Price</label>
        <input name="Tprice" id="Tprice" type="number" onChange={Techinput} /><br /><br />
        <label htmlFor="Timage">images</label>
        <input name="Timage" id="Timage" type="file" onChange={Techfileinput} /><br /><br />
        <label htmlFor="Tdescription">Technology Despription</label>
        <input name="Tdescription" id="Tdescription" onChange={Techinput} /><br /><br />
      </form>
      <button onClick={SubmitAction}>Submit</button>
    </div>
    
  );
};

export default UploadTech;
