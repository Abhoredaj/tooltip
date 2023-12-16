import React from 'react';

// Tooltip component that displays a message based on the position
const Tooltip = ({ position }) => (
  // Dynamically apply the tooltip class based on the specified position
  <div className={`tooltip ${position}`}>
    {/* Display a message with the hovered position */}
    Thanks for hovering "{position}" position!
  </div>
);

// Export the Tooltip component as the default export
export default Tooltip;
