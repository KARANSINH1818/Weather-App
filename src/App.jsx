// Importing the main Weather App component
import WheatherApp from "./WheatherApp";

// Importing the CSS file for styling the App component
import './App.css';

// Main App component
function App() {
  return (
    <>
      {/* Rendering the Weather App component */}
      <WheatherApp />
    </>
  );
}

// Exporting the App component so it can be used in index.js
export default App;