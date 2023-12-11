const express = require('express');
const router = express.Router();
const JobApply = require('../models/JobApplyForm');

//save Job Applications
router.post('/apply/save', async (req, res) => {
    try {
      // Assuming req.body contains the form data
      const newJobApply = new JobApply(req.body);
      const savedJobApply = await newJobApply.save();
      res.status(201).json({ success: true, message: 'Data saved successfully', data: savedJobApply });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//get all Job Applications
router.get('/jobapplications', async (req, res) => {
  try {
    const jobApplies = await JobApply.find();
    res.status(200).json({ success: true, message: 'Job Applications fetched successfully', data: jobApplies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//get a single Job Application by ID
router.get('/jobapplications/:id', async (req, res) => {
  try {
    const jobApply = await JobApply.findById(req.params.id);
    if (!jobApply) {
      return res.status(404).json({ error: 'Job Application not found' });
    }
    res.status(200).json({ success: true, message: 'Job Application fetched successfully', data: jobApply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//delete a single Job Application by ID
router.delete('/jobapplications/delete/:id', async (req, res) => {
  try {
    const jobApply = await JobApply.findByIdAndDelete(req.params.id);
    if (!jobApply) {
      return res.status(404).json({ error: 'Job Application not found' });
    }
    res.status(200).json({ success: true, message: 'Job Application deleted successfully', data: jobApply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;