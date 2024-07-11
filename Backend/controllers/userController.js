const userModel = require("../models/userModel");
const jwt= require("jsonwebtoken")
const bcrypt =require ("bcrypt");
const validator= require("validator")

const registerUser = async (req,res) => {
  const {Uname, Uemail, Upassword} = req.body;
  try{
      const exists = await userModel.findOne({Uemail})
      if(exists){
          return res.json({success:false,message: "User already exists"})
      }
      if(!validator.isEmail(Uemail)){
          return res.json({success:false,message: "Please enter a valid email"})
      }
      if(Upassword.length<8){
          return res.json({success:false,message: "Please enter a strong password"})
      }
      const salt = await bcrypt.genSalt(10); 
      const hashedPassword = await bcrypt.hash(Upassword, salt)

      const newUser = new userModel({Uname, Uemail, Upassword: hashedPassword})
      console.log(newUser);
      // const user = await newUser.save()
      // const token = createToken(user._id)
      const user = await newUser.save()
      res.json({success:true})

  } catch(error){
      console.log(error);
      res.json({success:false,message:"Error"})
  }
}





const loginUser=async(req,res)=>{
  try {
    const user=req.body;
    const findUser=await userModel.findOne({email:user.email});
    if(!findUser){
      res.status(400).json({error:"Invalid Email or Password"})
      }
      else{
        if(findUser.password===user.password){
          res.status(200).json({message:"Login Successfull",data:findUser})
          }
          else{
            res.status(400).json({error:"Invalid Email or Password"})

          }
          } 
          } catch (error) {
            res.status(400).json({error:error.messge})
            }
            }



            const logoutUser= async(req,res)=>{
              try {
                res.clearCookie("jwt", { path: "/" });
                res.status(200).json({message:"Logout Successfull"})
                } catch (error) {
                  res.status(400).json({error:error.messge})
                  }
                  
            }



            const getUser= async(req,res)=>{
              try {
                const findUser=await userModel.find();
                res.status(200).json(findUser)
                } catch (error) {
                  res.status(400).json({error:error.messge})

                }
            }

module.exports={registerUser,loginUser,logoutUser,getUser}