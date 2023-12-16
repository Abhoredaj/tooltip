// Importing necessary styles and components
import './App.css';
import PositionSelect from './components/Selector';
import Hover from './components/Hover';
import BtnContextProvider from './ButtonContext';

// Main App component
function App() {
  return (
    // The root div with the "App" class for styling
    <div className="App">
      {/* Wrap the components that need access to the button context with the provider */}
      <BtnContextProvider>
        {/* Component for selecting the position */}
        <PositionSelect />
        {/* Component for handling hover events */}
        <Hover />
      </BtnContextProvider>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
