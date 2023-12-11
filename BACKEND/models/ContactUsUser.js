const mongoose = require('mongoose');//import mongoose for module

const contactUsUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,  
    required: true,
  },
});

//const JobApply = mongoose.model('JobApply', jobApplySchema);
const ContactUsUser = mongoose.model('ontactUsUser',contactUsUserSchema);
module.exports = ContactUsUser;
