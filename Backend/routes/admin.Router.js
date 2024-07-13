// Admin Router ---

const express = require("express");
const router =  express.Router();

const AdminLoginController =require("../controllers/adminController") 


router.post("/AdminLogin",AdminLoginController.AdminLogin);

module.exports = router;