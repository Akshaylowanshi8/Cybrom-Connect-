const express = require("express");
const router =  express.Router();
const DashboardController = require("../controllers/dashboard.Controller");
const AdminLoginController =require("../controllers/adminController") 
router.post("/AdminLogin",AdminLoginController.AdminLogin);
router.post("/uploadtech",DashboardController.UploadTech);


module.exports = router;