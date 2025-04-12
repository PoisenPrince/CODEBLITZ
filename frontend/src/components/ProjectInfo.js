// src/components/ProjectInfo.js
import React from 'react';
import './MultiStepForm.css';

const ProjectInfo = ({ data = {}, updateData = () => {} }) => {
  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="multi-step-form">
      <form>
        <label>
          Project Type:
          <select
            name="projectType"
            value={data.projectType || ''}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
            <option value="Road">Road</option>
            <option value="Bridge">Bridge</option>
          </select>
        </label>
        {/* Add more inputs here in same structure */}
      </form>
    </div>
  );
};

export default ProjectInfo;
