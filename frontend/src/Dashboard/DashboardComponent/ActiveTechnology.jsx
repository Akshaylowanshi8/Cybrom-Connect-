import { useState,useEffect } from "react";

const ActiveTechnology = ()=>{
    const [alltech, setAllTech] = useState({});
    const AllTechnology = ()=>{
        let url = "http://localhost:8000/dashboard/alltech";
        console.log(tech);
        axios.get(url)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error('Error in fatching technology:', error);
          });
    }
    useEffect(()=>{
        AllTechnology()
    },[])
    return(
        <>
          {alltech.map((tech)=>(
            <div key={tech.id}>
              <h1 key={tech.id}>{tech.tname}</h1>
            </div>
            
          ))}
        
        </>
    )
}
export default ActiveTechnology;