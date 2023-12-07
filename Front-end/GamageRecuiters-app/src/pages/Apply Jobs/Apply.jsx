import React, { useState } from "react";
import Header from '../../component/Header/Header'
import Jobvacancy from '../Job-vacancy/Jobvacancy'

import './Apply.css';

const Apply = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        jobCategory: "",
        cv: null,
        termsAccepted: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
      }
  return (

    <>
    <Header></Header>
    <div className="apply-job-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name*:
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email*:
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Contact Number*:
          <input
            type="tel"
            name="contactNumber"
            placeholder="Enter Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Job Category*:
          <select
            name="jobCategory"
            value={formData.jobCategory}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Job Category</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </label>

        <label>
          CV (PDF)*:
          <input
            type="file"
            name="cv"
            accept=".pdf"
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="checkbox-label">
            <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                required
            />
            <span>I accept the terms of service</span>
        </label>

        <button className="button" type="submit" disabled={!formData.termsAccepted}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Apply
