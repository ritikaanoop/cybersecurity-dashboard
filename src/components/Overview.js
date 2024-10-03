import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <h2>Current Risk Overview</h2>
      <div className="cards">
        <div className="card" style={{ backgroundColor: '#FF5733' }}> 
          <h3>132%</h3>
          <p>Total Threats</p>
        </div>
        <div className="card" style={{ backgroundColor: '#FFC300' }}> 
          <h3>16%</h3>
          <p>Video File Risk</p>
        </div>
        <div className="card" style={{ backgroundColor: '#28B463' }}> 
          <h3>43%</h3>
          <p>Image File Risk</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
