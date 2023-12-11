const mongoose = require('mongoose');//import mongoose for module

const contactUsCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
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
  description: {
    type: String,  
    required: true,
  },
});

const ContactUsCompany = mongoose.model('ContactUsCompany', contactUsCompanySchema);

module.exports = ContactUsCompany;



