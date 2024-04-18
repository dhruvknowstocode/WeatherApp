import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "New York",
        humidity: 60,
        temp: 20,
        tempMin: 18,
        tempMax: 22,
        feelsLike: "pleasant",
        weather: "Partly Cloudy",
        windSpeed: 8, // Example wind speed value in meters per second
        visibility: 10000, // Example visibility value in meters
        sunrise: "6:00 AM", // Example sunrise time
        sunset: "6:30 PM", // Example sunset time
        airQuality: "good"
    });


    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div className="weather-app-container">
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
