const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
 company: {
    type: String,
    required: true,
 },
 jobCategory: {
    type: String,
    enum: ['HR', 'FMCG', 'Accounting and Finance', 'Telecommunication', 'Manufacturing', 'Insurance', 'Shipping','Hospitality','Education','Other'],
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
 jobPost: {
    //type: String,
    data: Buffer,
    contentType: String,
 },
});

module.exports = mongoose.model('JobPost', JobPostSchema);