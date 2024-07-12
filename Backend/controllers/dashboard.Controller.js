const Technology = require("../models/Technology");
const Cloudinary = require("../Couldinary")






const UploadTech = async (req, res) => {
  try {
    const  Tname  = req.body;
    // console.log(Tname);

    const newTech = new Technology( Tname );
    const savedTech = await newTech.save();

    res.status(201).json(savedTech);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { UploadTech };
