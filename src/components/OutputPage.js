// src/components/OutputPage.js
import React from 'react';
import './OutputPage.css';
import './MultiStepForm.css';

import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const OutputPage = ({ formData }) => {
  const { projectInfo } = formData;

  // Mock calculation (replace with real logic later or after ML)
  const costDistribution = {
    materials: 50000,
    labor: 30000,
    location: 10000,
    misc: 5000,
  };

  const pieData = {
    labels: ['Materials', 'Labor', 'Location Factors', 'Miscellaneous'],
    datasets: [
      {
        label: 'Cost Distribution',
        data: Object.values(costDistribution),
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
      },
    ],
  };

  const barData = {
    labels: ['Materials', 'Labor', 'Location Factors', 'Miscellaneous'],
    datasets: [
      {
        label: 'Cost Breakdown',
        data: Object.values(costDistribution),
        backgroundColor: '#4e73df',
      },
    ],
  };

  return (
    <div>
      <h2>Estimated Cost Distribution</h2>
      <div style={{ width: '300px', margin: 'auto' }}>
        <Pie data={pieData} />
      </div>

      <h2>Detailed Cost Estimate</h2>
      <div style={{ width: '500px', margin: 'auto' }}>
        <Bar data={barData} />
      </div>

      <h3>Project Summary:</h3>
      <ul>
        <li><strong>Project Type:</strong> {projectInfo.projectType}</li>
        <li><strong>Area:</strong> {projectInfo.area} sq.ft</li>
        <li><strong>No. of Floors:</strong> {projectInfo.floors}</li>
        {/* Add more details as needed */}
      </ul>
    </div>
  );
};

export default OutputPage;
