import { useState } from "react";
import axios from "axios";

const UploadTech = () => {
  const [tech, setTech] = useState({});

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
        <input name="Tname" onChange={Techinput} />
        <label htmlFor="T">Technology Name</label>
        <input name="Tname" onChange={Techinput} />
      </form>
      <button onClick={SubmitAction}>Submit</button>
    </>
  );
};

export default UploadTech;
