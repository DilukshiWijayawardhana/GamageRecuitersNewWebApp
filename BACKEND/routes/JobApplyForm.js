const express = require('express');
const router = express.Router();
const multer = require('multer');
const JobApply = require('../models/JobApplyForm');
const fs = require('fs');
const path = require('path');
const { Types } = require('mongoose');

const uploadDir = path.join(__dirname, '../public/uploads');

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, uploadDir);
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname);
   },
});
   

const upload = multer({ storage: storage });

//save Job Applications
// router.post('/apply/save', async (req, res) => {
//     try {
//       // Assuming req.body contains the form data
//       const newJobApply = new JobApply(req.body);
//       const savedJobApply = await newJobApply.save();
//       res.status(201).json({ success: true, message: 'Data saved successfully', data: savedJobApply });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// Route for uploading image
router.post('/apply/save', upload.single('cvUpload'), (req, res) =>{
     const newJobApply = new JobApply({
     name: req.body.name,
     email: req.body.email,
     contactNumber: req.body.contactNumber,
     jobCategory: req.body.jobCategory,
     address: req.body.address,
     cvUpload: req.file.path,
     acceptTerms: req.body.acceptTerms === 'true',
  });
 
  newJobApply.save()
  .then(data => {
    res.send({ message: 'JobApplication successfully created!', data: data });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the JobApplication."
    });
  });
 });

//get all Job Applications
// router.get('/jobapplications', async (req, res) => {
//   try {
//     const jobApplies = await JobApply.find();
//     res.status(200).json({ success: true, message: 'Job Applications fetched successfully', data: jobApplies });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Route for getting all JobPosts
router.get('/jobapplications', (req, res) => {
  JobApply.find()
      .then(jobapplications => {
          res.send(jobapplications);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving jobapplications."
          });
      });
});

//get a single Job Application by ID
// router.get('/jobapplications/:id', async (req, res) => {
//   try {
//     const jobApply = await JobApply.findById(req.params.id);
//     if (!jobApply) {
//       return res.status(404).json({ error: 'Job Application not found' });
//     }
//     res.status(200).json({ success: true, message: 'Job Application fetched successfully', data: jobApply });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Route for getting a single Job Application by ID
router.get('/:id', (req, res) => {
  JobApply.findById(req.params.id)
      .then(jobapplication => {
          if (!jobapplication) {
              return res.status(404).send({
                  message: "Job Applicationnotion found with id " + req.params.id
              });
          }
          res.send(jobapplication);
      })
      .catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Job Applicationnotion not found with id " + req.params.id
              });
          }
          return res.status(500).send({
              message: "Error retrieving Job Applicationnotion with id " + req.params.id
          });
      });
});



// router.delete('/jobapplications/delete/:id', async (req, res) => {
//   try {
//     const jobApply = await JobApply.findByIdAndDelete(req.params.id);
//     if (!jobApply) {
//       return res.status(404).json({ error: 'Job Application not found' });
//     }
//     res.status(200).json({ success: true, message: 'Job Application deleted successfully', data: jobApply });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

//delete a single Job Application by ID
router.delete('/delete/:id', (req, res) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Job Application id is invalid.' });
  }

  JobApply.findByIdAndDelete(req.params.id)
      .then(deletedJobApplication => {
          if (!deletedJobApplication) {
              return res.status(404).send({
                  message: "Job Application not found with id " + req.params.id
              });
          }
          res.send({ message: 'Job Application deleted successfully!' });
      })
      .catch(err => {
          if (err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Job Application not found with id " + req.params.id
              });
          }
          return res.status(500).send({
              message: "Could not delete Job Application with id " + req.params.id
          });
      });
});


module.exports = router;