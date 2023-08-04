import React from "react";
import satData from './satData';
import './styling.css';
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      
      <button onClick={() => filterByType('All')}>All Orbit</button>
    </div>
  );
};

export default Buttons;
