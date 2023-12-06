const mongoose = require('mongoose');//import mongoose for module

const jobApplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  jobCategory: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cvUpload: {
    type: String,  // This could be a file path, URL, or a reference to a storage system
    required: true,
  },
  acceptTerms: {
    type: Boolean,
    required: true,
  },
});

const JobApply = mongoose.model('JobApply', jobApplySchema);

module.exports = JobApply;
