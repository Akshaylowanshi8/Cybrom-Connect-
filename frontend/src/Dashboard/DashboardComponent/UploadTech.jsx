import { useState } from "react";
import axios from "axios";
import "../Dashboard.assets/css/uploadtech.css"
const UploadTech = () => {
  const [tech, setTech] = useState([]);

  const Techinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTech((values) => ({ ...values, [name]: value }));
  };

  const SubmitAction = () => {
    let url = "http://localhost:8000/dashboard/uploadtech";
    console.log(tech);
    axios.post(url, tech)
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
        <label htmlFor="Tname">Technology Name</label>
        <input name="Tname" id="Tname" type="text" onChange={Techinput} /><br />
        <label htmlFor="Tprice">Technology Price</label>
        <input name="Tprice" id="Tprice" type="number" onChange={Techinput} /><br />
        <label htmlFor="Timage">Technology Price</label>
        <input name="Timage" id="Timage" type="file" onChange={Techinput} /><br />
        <label htmlFor="Tdescription">Technology Despription</label>
        <input name="Tdescription" id="Tdescription" onChange={Techinput} /><br />
      </form>
      <button onClick={SubmitAction}>Submit</button>
    </div>
  );
};

export default UploadTech;
