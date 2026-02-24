// Importing required components
import SearchBox from './SearchBox';
import InfoBox from './InfoBox.jsx';

// Importing React hooks
import { useState, useEffect } from "react";

// Main Weather App Component
export default function WheatherApp() {

  // Weather data state
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Loading spinner state
  const [loading, setLoading] = useState(false);

  // Search history state
  const [history, setHistory] = useState([]);

  // Dynamic background selector
  const getBackground = () => {
    const condition = weatherInfo.weather?.toLowerCase();

    if (condition?.includes("rain")) return "rain-bg";
    if (condition?.includes("cloud")) return "cloud-bg";
    if (condition?.includes("clear")) return "clear-bg";
    return "default-bg";
  };

  // Update weather data + history
  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);

    setHistory((prev) => {
      const updated = [newInfo.city, ...prev.filter(c => c !== newInfo.city)];
      return updated.slice(0, 5);
    });

    setLoading(false);
  };

  // OpenWeather API Key
  const API_KEY = "78f118bd91c6ee63492140cbc77e4400";

  // Fetch weather by coordinates
  const fetchByCoords = async (lat, lon) => {
    try {
      setLoading(true);

      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      let data = await res.json();

      let result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      };

      updateInfo(result);

    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Get current location weather
  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => alert("Location access denied!")
      );
    }
  };

  // Auto fetch on first render
  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  return (
    <div className={`mainContainer ${darkMode ? "dark" : ""} ${getBackground()}`}>

      {/* FIXED: class → className */}
      <h1 className="app-title">Weather App by Karansinh</h1>

      <button className="toggleBtn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <button className="toggleBtn" onClick={getCurrentLocationWeather}>
        📍 Use My Location
      </button>

      {loading && <h3>Loading...</h3>}

      <SearchBox updateInfo={updateInfo} setLoading={setLoading} />

      <InfoBox info={weatherInfo} />

      {history.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Recent Searches:</h4>

          {history.map((city, index) => (
            <button
              key={index}
              className="historyBtn"
              onClick={() => setWeatherInfo(prev => ({ ...prev, city }))}
            >
              {city}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}