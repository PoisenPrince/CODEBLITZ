// src/components/OutputPage.js
// src/components/OutputPage.js
import React, { useEffect, useState } from 'react';
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
  const [costDistribution, setCostDistribution] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('https://codeblitz-1-a3np.onrender.com/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCostDistribution(data); // This assumes your backend returns an object like { materials: ..., labor: ..., etc }
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to fetch estimated cost. Please try again later.');
      }
    };

    fetchPrediction();
  }, [formData]);

  if (error) return <p>{error}</p>;
  if (!costDistribution) return <p>Calculating estimated cost...</p>;

  const pieData = {
    labels: ['Materials', 'Labor', 'Location Factors', 'Miscellaneous'],
    datasets: [
      {
        label: 'Cost Distribution',
        data: [
          costDistribution.materials,
          costDistribution.labor,
          costDistribution.location,
          costDistribution.misc,
        ],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
      },
    ],
  };

  const barData = {
    labels: ['Materials', 'Labor', 'Location Factors', 'Miscellaneous'],
    datasets: [
      {
        label: 'Cost Breakdown',
        data: [
          costDistribution.materials,
          costDistribution.labor,
          costDistribution.location,
          costDistribution.misc,
        ],
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

