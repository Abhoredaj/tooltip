import { createContext, useContext, useState, useEffect } from "react";

// Create a context for the button state and actions
const ButtonContext = createContext();

// Custom hook to access the context value
const useButtonContext = () => {
    const value = useContext(ButtonContext);
    if (!value) {
        throw new Error("useButtonContext must be used within a ButtonContextProvider");
    }
    return value;
}

// Provider component that wraps your application and provides the context value
const BtnContextProvider = ({ children }) => {
    // State for the current position
    const [pos, setPos] = useState("");
    // State for tracking whether the mouse is hovering over the button
    const [hovering, setHovering] = useState(false);
    // Array of available positions
    const positions = ["Top", "Bottom", "Right", "Left"];

    // Cleanup effect to reset position when the component unmounts
    useEffect(() => {
        return () => {
            setPos("Top");
        };
    }, []); 

    // Function to handle mouse enter event on the button
    const handleMouseEnter = () => {
        setHovering(!hovering); // Set hovering state to true when the mouse enters the button
    };

    // Function to handle selection of position options
    const handleSelect = (position) => {
        setPos(position); // Update the position state when an option is selected
    };

    // Function to handle mouse leave event on the button
    const handleMouseLeave = () => {
        setHovering(!hovering); // Set hovering state to false when the mouse leaves the button
    };

    return (
        // Provide the context value to the components in the tree
        <ButtonContext.Provider value={{ pos, positions, hovering, handleMouseEnter, handleSelect, handleMouseLeave }}>
            {children}
        </ButtonContext.Provider>
    );
}

//exports
export { useButtonContext };
export default BtnContextProvider;

