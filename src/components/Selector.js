import React, { useState } from "react";
import { useButtonContext } from "../ButtonContext";
import { Select, MenuItem, Box, FormControl, InputLabel } from "@mui/material";

// Component for selecting positions
const PositionSelect = () => {
  // State to manage the selected position
  const [pos, setPos] = useState("");
  
  // Destructure values and functions from the button context
  const { handleSelect, positions } = useButtonContext();
  
  // Handler function for position selection change
  const handleChange = (event) => {
    // Call handleSelect to update the position in the context
    handleSelect(positions[event.target.value]);
    // Update the local state for rendering purposes
    setPos(positions[event.target.value]);
  };

  return (
    // Styling container for the position selector
    <Box sx={{ minWidth: 25, marginTop: 15, width: 250, height: 50, mx: "auto" }}>
      <FormControl fullWidth>
        {/* Label for the position selector */}
        <InputLabel id="select-label">Positions</InputLabel>
        {/* MUI Select component for position selection */}
        <Select
          labelId="select-label"
          id="select"
          // value={pos} // Uncomment if you want to control the value using local state
          label="Positions"
          onChange={handleChange}
        >
          {/* Mapping through positions array to create MenuItem components */}
          {positions.map((position, index) => (
            <MenuItem key={index} value={index}>
              {position}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PositionSelect;
