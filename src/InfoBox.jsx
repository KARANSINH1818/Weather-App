// ==============================
// 📦 Material UI Imports
// ==============================

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// 🌤 Weather Icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// 🎨 Component Styling
import './InfoBox.css';


// ==============================
// 🌦 InfoBox Component
// Displays Weather Information
// ==============================

export default function InfoBox({ info }) {

  // 🖼 Background Images Based on Weather Conditions
  const HOT_URL = "https://hikebiketravel.com/wp-content/uploads/2015/01/Chickadee-Valley-skiing-3-1.jpg";
  const COLD_URL = "https://www.ktsm.com/wp-content/uploads/sites/38/2023/07/GettyImages-824845572.jpg?w=724";
  const RAIN_URL = "https://melliobrien.com/wp-content/uploads/2015/06/876588-rain-wallpaper.gif";

  return (
    <div className="InfoBox">
      <div className="cardContainer">

        {/* 🌤 Weather Card */}
        <Card sx={{ maxWidth: 400 }}>

          {/* Dynamic Weather Image */}
          <CardMedia
            sx={{ height: 200 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />

          <CardContent>

            {/* 📍 City Name + Weather Icon */}
            <Typography gutterBottom variant="h5" component="div">
              {info.city}

              {
                info.humidity > 80
                  ? <ThunderstormIcon />
                  : info.temp > 15
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />
              }
            </Typography>

            {/* 🌡 Weather Details */}
            <Typography
              variant="body2"
              color="text.secondary"
              component="span"
            >
              <p>Temperature = {info.temp} &deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin} &deg;C</p>
              <p>Max Temp = {info.tempMax} &deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike} &deg;C
              </p>
            </Typography>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}