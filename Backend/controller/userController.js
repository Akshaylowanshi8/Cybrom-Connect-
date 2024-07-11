// const userModel = require("../models/userModel");
// const jwt= require("jsonwebtoken")
// const bcrypt =require ("bcrypt");
// const validator= require("validator")


// // const registerUser=async(req,res)=>{
// //   try {
// //     const user=req.body;
// //     // console.log(user);
// //     const newUser=new userModel(user);
// //     // console.log(newUser);
// //     const save=await newUser.save();
// //     console.log(save);
// //     res.status(200).json(saveData);
// //     } catch (error) {
// //       res.status(400).json({error:"Not Register"})
// //       }
// //     }


// const registerUser = async (req,res) => {
//   const {name, email, password} = req.body;
//   try{
//       //check if user already exists
//       const exists = await userModel.findOne({email})
//       if(exists){
//           return res.json({success:false,message: "User already exists"})
//       }

//       // validating email format & strong password
//       if(!validator.isEmail(email)){
//           return res.json({success:false,message: "Please enter a valid email"})
//       }
//       if(password.length<8){
//           return res.json({success:false,message: "Please enter a strong password"})
//       }

//       // hashing user password
//       const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
//       const hashedPassword = await bcrypt.hash(password, salt)

//       const newUser = new userModel({name, email, password: hashedPassword})
//       const user = await newUser.save()
//       const token = createToken(user._id)
//       res.json({success:true,token})

//   } catch(error){
//       console.log(error);
//       res.json({success:false,message:"Error"})
//   }
// }
// const loginUser=async(req,res)=>{
//   try {
//     const user=req.body;
//     const findUser=await userModel.findOne({email:user.email});
//     if(!findUser){
//       res.status(400).json({error:"Invalid Email or Password"})
//       }
//       else{
//         if(findUser.password===user.password){
//           res.status(200).json({message:"Login Successfull",data:findUser})
//           }
//           else{
//             res.status(400).json({error:"Invalid Email or Password"})

//           }
//           } 
//           } catch (error) {
//             res.status(400).json({error:error.messge})
//             }
//             }
//             const logoutUser= async(req,res)=>{
//               try {
//                 res.clearCookie("jwt", { path: "/" });
//                 res.status(200).json({message:"Logout Successfull"})
//                 } catch (error) {
//                   res.status(400).json({error:error.messge})
//                   }
                  
//             }
//             const getUser= async(req,res)=>{
//               try {
//                 const findUser=await userModel.find();
//                 res.status(200).json(findUser)
//                 } catch (error) {
//                   res.status(400).json({error:error.messge})

//                 }
//             }

// module.exports={registerUser,loginUser,logoutUser,getUser}