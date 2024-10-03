import React from 'react';

function SidebarItems() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>Overview:</li>
      </ul>
    </nav>
  );
}

const navStyle = {
  marginTop: '10px',
  textAlign: 'left', 
};

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
};

export default SidebarItems;
