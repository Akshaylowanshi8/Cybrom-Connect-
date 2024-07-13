import { useState } from "react";
import axios from "axios";
import "../Dashboard.assets/css/uploadtech.css";

const UploadTech = () => {
  const [tech, setTech] = useState({});
  const [techimg, setTechimg] = useState([]);

  const Techinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTech((values) => ({ ...values, [name]: value }));
  };

  const Techfileinput = (e) => {
    setTechimg(e.target.files);
  };

  const SubmitAction = (e) => {
    e.preventDefault();
    const fordata = new FormData();
    for (let i = 0; i < techimg.length; i++) {
      fordata.append("Techimages", techimg[i]);
    }

    // Append other form data
    for (const key in tech) {
      fordata.append(key, tech[key]);
    }

    let url = "http://localhost:8000/dashboard/uploadtech";
    axios.post(url, fordata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error('Error uploading technology:', error);
    });
  };

  return (
    <div className="Upload-main-div">
      <form onSubmit={SubmitAction}>
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
        <label htmlFor="aplyDate">Apply Date</label>
        <input type="date" name="aplyDate" max={"2024-12-31"} min={"2024-01-01"} onChange={Techinput} required /><br /><br />
        <label htmlFor="Tprice">Technology Price</label>
        <input name="Tprice" id="Tprice" type="number" onChange={Techinput} /><br /><br />
        <label htmlFor="Tdescription">Technology Description</label>
        <input name="Tdescription" id="Tdescription" onChange={Techinput} /><br /><br />
        <label htmlFor="Timage">Images</label>
        <input name="Timage" id="Timage" type="file" onChange={Techfileinput} multiple /><br /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadTech;
