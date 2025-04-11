// src/components/MaterialSelection.js
import React from 'react';
import './MultiStepForm.css';


const MaterialSelection = ({ data, updateData }) => {
  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Material Selection</h2>
      <label>
        Type of Bricks:
        <select name="brickType" value={data.brickType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Red Brick">Red Brick</option>
          <option value="Fly Ash">Fly Ash</option>
        </select>
      </label>
      <label>
        Cement Type:
        <select name="cementType" value={data.cementType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="OPC">OPC</option>
          <option value="PPC">PPC</option>
        </select>
      </label>
      <label>
        Steel Type:
        <select name="steelType" value={data.steelType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="TMT">TMT</option>
          <option value="HYSD">HYSD</option>
        </select>
      </label>
      <label>
        Flooring:
        <select name="flooring" value={data.flooring} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Granite">Granite</option>
          <option value="Vitrified Tiles">Vitrified Tiles</option>
        </select>
      </label>
      <label>
        Paint:
        <select name="paint" value={data.paint} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Emulsion">Emulsion</option>
          <option value="Distemper">Distemper</option>
        </select>
      </label>
    </div>
  );
};

export default MaterialSelection;
