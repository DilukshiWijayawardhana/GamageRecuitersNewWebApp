const express = require('express');
const router = express.Router();
const multer = require('multer');
const JobPost = require('../models/JobPost');
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

// Route for uploading image
router.post('/upload', upload.single('jobPost'), (req, res) =>{
 const jobPost = new JobPost({
    company: req.body.company,
    jobCategory: req.body.jobCategory,
    jobTitle: req.body.jobTitle,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    description: req.body.description,
    jobPost: req.file.path,
 });

 jobPost.save()
 .then(data => {
   res.send({ message: 'JobPost successfully created!', data: data });
 })
 .catch(err => {
   res.status(500).send({
     message: err.message || "Some error occurred while creating the JobPost."
   });
 });
});


// Route for getting all JobPosts
router.get('/view', (req, res) => {
   JobPost.find()
       .then(jobPosts => {
           res.send(jobPosts);
       })
       .catch(err => {
           res.status(500).send({
               message: err.message || "Some error occurred while retrieving JobPosts."
           });
       });
});

// Route for getting a single JobPost by its ID
router.get('/:id', (req, res) => {
   JobPost.findById(req.params.id)
       .then(jobPost => {
           if (!jobPost) {
               return res.status(404).send({
                   message: "JobPost not found with id " + req.params.id
               });
           }
           res.send(jobPost);
       })
       .catch(err => {
           if(err.kind === 'ObjectId') {
               return res.status(404).send({
                   message: "JobPost not found with id " + req.params.id
               });
           }
           return res.status(500).send({
               message: "Error retrieving JobPost with id " + req.params.id
           });
       });
});

// Route for updating a single JobPost by its ID
router.put('/update/:id', (req, res) => {
    JobPost.findByIdAndUpdate(req.params.id, {
        company: req.body.company,
        jobCategory: req.body.jobCategory,
        jobTitle: req.body.jobTitle,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        description: req.body.description,
        jobPost: req.body.jobPost,
    }, {new: true})
    .then(jobPost => {
        if (!jobPost) {
            return res.status(404).send({
                message: "JobPost not found with id " + req.params.id
            });
        }
        res.send(jobPost);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "JobPost not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating JobPost with id " + req.params.id
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    if (!Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'JobPost id is invalid.' });
    }

    JobPost.findByIdAndDelete(req.params.id)
        .then(deletedJobPost => {
            if (!deletedJobPost) {
                return res.status(404).send({
                    message: "JobPost not found with id " + req.params.id
                });
            }
            res.send({ message: 'JobPost deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "JobPost not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete JobPost with id " + req.params.id
            });
        });
});

module.exports = router;