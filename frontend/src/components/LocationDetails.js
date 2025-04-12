// src/components/LocationDetails.js
import React from 'react';
import './MultiStepForm.css';


const LocationDetails = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateData({ [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div>
      <h2>Location Details</h2>
      <label>
        City/State:
        <input
          type="text"
          name="cityState"
          value={data.cityState}
          onChange={handleChange}
        />
      </label>
      <label>
        Terrain Type:
        <select name="terrain" value={data.terrain} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Flat">Flat</option>
          <option value="Hilly">Hilly</option>
          <option value="Coastal">Coastal</option>
        </select>
      </label>
      <label>
        Electricity/Water Access:
        <input
          type="checkbox"
          name="infraAccess"
          checked={data.infraAccess}
          onChange={handleChange}
        /> (Adds infra cost)
      </label>
      <label>
        Soil Type (if known):
        <input
          type="text"
          name="soilType"
          value={data.soilType}
          onChange={handleChange}
        />
      </label>
      <label>
        Desired Construction Duration (in days):
        <input
          type="number"
          name="duration"
          value={data.duration}
          onChange={handleChange}
        />
      </label>
      <label>
        Budget Constraint (optional):
        <input
          type="number"
          name="budget"
          value={data.budget}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default LocationDetails;
