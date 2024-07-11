const AdminLoginData =require("../models/AdminLoginModel")
const AdminLogin= async(req ,res)=>{
    let { Email, Password} =req.body;
    console.log( Email , Password );
    await AdminLoginData.findOne({"Email" : Email})
   .then(user => {
       // console.log(user);
       if(user){
           if(user.Password === Password){
               res.json("Success")
           }
           else{
               res.json("The password is incorrect")
           }
       }
       else{
           res.json("No record existed")
       }
   })}
    

  



module.exports = { AdminLogin } 