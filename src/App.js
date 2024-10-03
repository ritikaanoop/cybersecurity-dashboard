import React from 'react';
import './App.css'; 
import Header from './components/Header'; 
import AlertsTable from './components/AlertsTable'; 
import DataVisualization from './components/DataVisualization'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <nav>
            <h2>Welcome! Stay secure and informed.</h2>
            <ul>
              <li>Overview</li>
              <li>Issues</li>
              <li>Files</li>
              <li>Threat Details</li>
              <li>Threats</li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <DataVisualization /> 
          <AlertsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
