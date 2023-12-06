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
  
  module.exports = router;