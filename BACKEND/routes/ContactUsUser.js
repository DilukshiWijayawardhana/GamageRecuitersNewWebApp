const express = require('express');
const router = express.Router();
const ContactUsUser = require('../models/ContactUsUser');

// Save Contact Us User Questions
router.post('/save', async (req, res) => {
  try {
    // Assuming req.body contains the form data
    const newContactUsUser = new ContactUsUser(req.body);
    const savedContactUsUser = await newContactUsUser.save();
    res.status(201).json({
      success: true,
      message: 'Submitted successfully',
      data: savedContactUsUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all Contact Us User Comments
router.get('/UserComments', async (req, res) => {
  try {
    const userComments = await ContactUsUser.find();
    res.status(200).json({
      success: true,
      message: 'Contact Us User Comments fetched successfully',
      data: userComments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single Contact Us User Comment by ID
router.get('/usercomments/:id', async (req, res) => {
  try {
    const userComment = await ContactUsUser.findById(req.params.id);
    if (!userComment) {
      return res.status(404).json({ error: 'Contact Us User Comment not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Contact Us User Comment fetched successfully',
      data: userComment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a single Contact Us User Comment by ID
router.delete('/usercomments/delete/:id', async (req, res) => {
  try {
    const userComment = await ContactUsUser.findByIdAndDelete(req.params.id);
    if (!userComment) {
      return res.status(404).json({ error: 'Contact Us User Comment not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Contact Us User Comment deleted successfully',
      data: userComment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
