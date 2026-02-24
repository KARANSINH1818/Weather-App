# 🌦 Weather App - React + MUI + OpenWeather API

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-Material%20UI-007FFF?logo=mui)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather](https://img.shields.io/badge/API-OpenWeather-orange)](https://openweathermap.org/api)

A modern and responsive Weather Application built using React and Material UI.  
This app fetches real-time weather data using the OpenWeather API and provides dynamic backgrounds, dark mode, search history tracking, and location-based weather detection.

Clean UI. Animated backgrounds. Real-time API integration.

---

## 🌐 Live Demo

🔗 https://karansinh1818.github.io/Weather-App/

---

## 🚀 Live Deployment

🔗 https://weather-ql0v3lc0m-karansinh1818s-projects.vercel.app/
---


## 🚀 Features

- 🌍 Search weather by city name
- 📍 Detect weather using current GPS location
- 🌡 Real-time temperature, humidity, min/max temperature
- 🌦 Dynamic weather-based backgrounds (Rain, Cloud, Clear)
- 🌙 Dark / Light mode toggle
- 🔄 Loading indicator during API calls
- 🕒 Last 5 search history tracking
- ⚛ Built using React Hooks (useState, useEffect)
- 🎨 Material UI components
- 📱 Fully responsive layout

---

## 🛠 Tech Stack

- React.js  
- JavaScript (ES6+)  
- CSS3 (Animations, Flexbox, Responsive Design)  
- OpenWeather API  
- Material UI (MUI)  
- Vite  
- HTML5  

---

# 📦 Installation & Setup

## 🔹 Create Project

```bash
npm create vite@latest weather-app
cd weather-app
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

---

## 🔹 Add OpenWeather API Key (Recommended)

Create a `.env` file in root folder:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Then use it in your code:

```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

---

## 🔹 Run Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173/
```

---

## 🔹 Build for Production

```bash
npm run build
```

---

# 🚀 Deploy to GitHub Pages

## Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## Update vite.config.js

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/weather-app/",
})
```

---

## Update package.json scripts

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

## Deploy

```bash
npm run deploy
```

---

## 🧠 How It Works

1. User enters a city name or clicks "Use My Location".
2. App sends request to OpenWeather API.
3. Weather data is fetched and formatted.
4. Background updates dynamically based on weather condition.
5. Search history is stored.
6. Dark mode toggles theme instantly.

Weather updates without refreshing the page.

---

## 🎯 Future Improvements

- 🌦 Add hourly forecast
- 📅 Add 7-day forecast
- 🌡 Weather charts
- 🌍 Country flag detection
- 🎨 Glassmorphism UI
- 🔔 Weather alert notifications

---

## 👨‍💻 Author

**Karansinh Mori**  
Frontend Developer 🚀  

---

## ⭐ Support

If you like this project, give it a star ⭐ on GitHub!

Follow for more projects 👉 https://github.com/karansinh1818
