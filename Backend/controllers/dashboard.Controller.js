const formidable = require('formidable');
const Technology = require("../models/Technology");
const Cloudinary = require("../Couldinary")

const uploadImagesinCloudinary = async (imgPaths) => {
  try {
    const upload = imgPaths.map(imgPath => {
      return Cloudinary.uploader.upload(imgPath, { folder: 'Technology-' });
    });
    return await Promise.all(upload);
  } catch (error) {
    console.error('Error uploading images to Cloudinary:', error);
    throw error;
  }
};

const UploadTech = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.multiples = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(400).json({ error: 'Form parsing error' });
    }

    try {
      // Log form fields and files
      console.log('Form fields:', fields);
      console.log('Form files:', files);

      // Upload images to Cloudinary
      const imgPaths = files.Techimages ? (Array.isArray(files.Techimages) ? files.Techimages.map(file => file.filepath) : [files.Techimages.filepath]) : [];
      const uploadResults = await uploadImagesinCloudinary(imgPaths);

      // Ensure fields are strings
      const formData = {
        Tname: Array.isArray(fields.Tname) ? fields.Tname[0] : fields.Tname,
        Ttachnology: Array.isArray(fields.Ttachnology) ? fields.Ttachnology[0] : fields.Ttachnology,
        aplyDate: Array.isArray(fields.aplyDate) ? fields.aplyDate[0] : fields.aplyDate,
        Tprice: Array.isArray(fields.Tprice) ? fields.Tprice[0] : fields.Tprice,
        Tdescription: Array.isArray(fields.Tdescription) ? fields.Tdescription[0] : fields.Tdescription,
        imageUrls: uploadResults.map(result => result.secure_url),
      };

      // Log the formData before saving
      console.log('Form data to be saved:', formData);

      // Save form data to MongoDB
      const newTech = new Technology(formData);
      const savedTech = await newTech.save();

      res.status(201).json(savedTech);
    } catch (error) {
      console.error('Error saving technology data:', error);
      res.status(500).json({ error: 'Error uploading technology' });
    }
  });
};

module.exports = { UploadTech };
