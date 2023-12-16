import React from 'react';
import { useButtonContext } from "../ButtonContext";
import Tooltip from './Tooltip';

// Hover component for handling mouse hover events
export default function Hover() {
  // Destructure values and functions from the button context
  const { pos, hovering, handleMouseEnter, handleMouseLeave } = useButtonContext();

  return (
    // Container for the button and Tooltip
    <div id="button-container">
      {/* Button triggering hover events */}
      <button
        className="btn hover-btn"
        onMouseOver={handleMouseEnter} // Call handleMouseEnter when mouse over
        onMouseOut={handleMouseLeave}  // Call handleMouseLeave when mouse out
      >
        Hover Over Me!!
      </button>
      
      {/* Conditional rendering of Tooltip component based on hovering state */}
      {hovering && <Tooltip position={pos} />} {/* Render the Tooltip when hovering is true */}
    </div>
  );
}
