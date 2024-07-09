import { useState } from "react";
import axios from "axios";

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
    <>
      <form action="">
        <label htmlFor="Tname">Technology Name</label>
        <input name="Tname" id="Tname" type="text" onChange={Techinput} />
        <label htmlFor="Tprice">Technology Price</label>
        <input name="Tprice" id="Tprice" type="number" onChange={Techinput} />
        <label htmlFor="Timage">Technology Price</label>
        <input name="Timage" id="Timage" type="file" onChange={Techinput} />
        <label htmlFor="Tdescription">Technology Despription</label>
        <input name="Tdescription" id="Tdescription" onChange={Techinput} />
      </form>
      <button onClick={SubmitAction}>Submit</button>
    </>
  );
};

export default UploadTech;
