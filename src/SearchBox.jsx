// ==============================
// 📦 Material UI Imports
// ==============================

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// ⚛ React Hook
import { useState } from 'react';

// 🎨 Component Styling
import './SearchBox.css';


// ==============================
// 🔎 SearchBox Component
// Handles City Search Functionality
// ==============================

export default function SearchBox({ updateInfo, setLoading }) {

    // 🌆 Stores user input city name
    let [city, setCity] = useState("");

    // ❌ Error handling states
    let [error, setError] = useState(false);
    let [errorMsg, setErrorMsg] = useState("");

    // 🌍 OpenWeather API Details
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "78f118bd91c6ee63492140cbc77e4400";


    /* ============================== */
    /* 🌦 Fetch Weather Data Function */
    /* ============================== */

    let getWeatherInfo = async () => {

        // Calling OpenWeather API with city name
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        // If city not found or API error
        if (!response.ok) {
            throw new Error("City not found");
        }

        let jsonResponse = await response.json();

        // Formatting response data
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].main,
            description: jsonResponse.weather[0].description,
            icon: jsonResponse.weather[0].icon
        };

        console.log(result);  // Debugging purpose
        return result;
    };


    /* ============================== */
    /* ✏ Handle Input Change */
    /* ============================== */

    let handleChange = (evt) => {
        setCity(evt.target.value);  // Update city state
        setError(false);            // Reset error on typing
    };


    /* ============================== */
    /* 🚀 Handle Form Submit */
    /* ============================== */

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();   // Prevent page reload
            setLoading(true);       // Show loading spinner

            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);    // Send data to parent component

            setCity("");            // Clear input field

        } catch (err) {
            console.error(err);

            // Show error message if API fails
            setError(true);
            setErrorMsg("No such place exists or network error!");
            setLoading(false);
        }
    };


    /* ============================== */
    /* 🖥 UI Rendering */
    /* ============================== */

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>

                {/* 🌆 City Input Field */}
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />

                <br /><br />

                {/* 🔎 Search Button */}
                <Button
                    variant="contained"
                    type='submit'
                    size="large"
                >
                    Search
                </Button>

                {/* ❌ Error Message */}
                {error && <p style={{ color: "red" }}>{errorMsg}</p>}

            </form>
        </div>
    );
}