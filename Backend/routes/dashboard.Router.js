const express = require("express");
const router =  express.Router();
const DashboardController = require("../controllers/dashboard.Controller");

router.post("/uploadtech",DashboardController.UploadTech);

module.exports = router;