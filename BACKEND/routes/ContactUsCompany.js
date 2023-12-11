const express = require('express');
const router = express.Router();
const ContactUsCompany = require('../models/ContactUsCompany');

// Save Contact Us Company Questions
router.post('/save', async (req, res) => {
  try {
    // Assuming req.body contains the form data
    const newContactUsCompany = new ContactUsCompany(req.body);
    const savedContactUsCompany = await newContactUsCompany.save();
    res.status(201).json({
      success: true,
      message: 'Submitted successfully',
      data: savedContactUsCompany
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all Contact Us Company Comments
router.get('/companyComments', async (req, res) => {
  try {
    const companyComments = await ContactUsCompany.find();
    res.status(200).json({
      success: true,
      message: 'Contact Us Company Comments fetched successfully',
      data: companyComments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single Contact Us Company Comment by ID
router.get('/companycomments/:id', async (req, res) => {
  try {
    const companyComment = await ContactUsCompany.findById(req.params.id);
    if (!companyComment) {
      return res.status(404).json({ error: 'Contact Us Company Comment not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Contact Us Company Comment fetched successfully',
      data: companyComment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a single Contact Us Company Comment by ID
router.delete('/companycomments/delete/:id', async (req, res) => {
  try {
    const companyComment = await ContactUsCompany.findByIdAndDelete(req.params.id);
    if (!companyComment) {
      return res.status(404).json({ error: 'Contact Us Company Comment not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Contact Us Company Comment deleted successfully',
      data: companyComment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
