import React from 'react';
import './AlertsTable.css'; 

const AlertsTable = () => {
  return (
    <div className="alerts-table">
      <h2>Alerts Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Device ID</th>
            <th>Virus Name</th>
            <th>File Path</th>
            <th>File Type</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>2-10-2024</td>
            <td>thisisritik</td>
            <td>Code: Red</td>
            <td>C:\User\Documents\file.jpg</td>
            <td>Jpeg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTable;
