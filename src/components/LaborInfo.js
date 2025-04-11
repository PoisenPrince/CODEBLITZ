// src/components/LaborInfo.js
import React from 'react';
import './MultiStepForm.css';

const LaborInfo = ({ data, updateData }) => {
  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Labor Information</h2>
      <label>
        Number of Laborers:
        <input
          type="number"
          name="laborers"
          value={data.laborers}
          onChange={handleChange}
        />
      </label>
      <label>
        Estimated Labor Hours per Day:
        <input
          type="number"
          name="hoursPerDay"
          value={data.hoursPerDay}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Working Days:
        <input
          type="number"
          name="workingDays"
          value={data.workingDays}
          onChange={handleChange}
        />
      </label>
      <label>
        Skill Level:
        <select name="skillLevel" value={data.skillLevel} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Unskilled">Unskilled</option>
          <option value="Skilled">Skilled</option>
          <option value="Supervisor">Supervisor</option>
        </select>
      </label>
    </div>
  );
};

export default LaborInfo;
