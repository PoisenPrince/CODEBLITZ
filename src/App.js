import React, { useState } from 'react';
import ProjectInfo from './components/ProjectInfo';
import MaterialSelection from './components/MaterialSelection';
import LaborInfo from './components/LaborInfo';
import LocationDetails from './components/LocationDetails';
import OutputPage from './components/OutputPage';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectInfo: {},
    materials: {},
    labor: {},
    location: {}
  });

  const updateSection = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], ...data } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <OutputPage formData={formData} />;
  }

  return (
    <div className="App">
      <h1>Construction Cost Estimator</h1>
      <form onSubmit={handleSubmit}>
        <h2>Project Information</h2>
        <ProjectInfo data={formData.projectInfo} updateData={(data) => updateSection("projectInfo", data)} />

        <h2>Material Selection</h2>
        <MaterialSelection data={formData.materials} updateData={(data) => updateSection("materials", data)} />

        <h2>Labor Information</h2>
        <LaborInfo data={formData.labor} updateData={(data) => updateSection("labor", data)} />

        <h2>Location Details</h2>
        <LocationDetails data={formData.location} updateData={(data) => updateSection("location", data)} />

        <button type="submit">Estimate Cost</button>
      </form>
    </div>
  );
}

export default App;
