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
    enum: ['HR', 'FMCG', 'Accounting and Finance', 'Telecommunication', 'Manufacturing', 'Insurance', 'Shipping','Hospitality','Education','Other'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cvUpload: {
    data: Buffer,
    contentType: String,
  },
  acceptTerms: {
    type: Boolean,
    required: true,
  },
});

// const JobApply = mongoose.model('JobApply', jobApplySchema);

// module.exports = JobApply;
module.exports = mongoose.model('JobApply', jobApplySchema);