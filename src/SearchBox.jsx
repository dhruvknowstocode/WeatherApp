import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d6e348e8f6afd15ceaa094f95961f631";
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState(false);

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            const result = {
                city: cityName,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
                visibility: jsonResponse.visibility,
                sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString("en-US"),
                sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString("en-US"),
                airQuality:"good"
            };
            console.log(result);
            return result;
        } catch (err) {
           throw err;
        }
    };

    const changeName = (event) => {
        setCityName(event.target.value);
    };

    const stopsubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(cityName);
            setCityName("");
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            // Reset error state on successful search
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='searchbox'>
            <h1 className='main-heading'>Weather Search</h1>
            <form className='form-container' onSubmit={stopsubmit}>
                <TextField
                    id="city"
                    label="Enter City Name"
                    variant="outlined"
                    value={cityName}
                    onChange={changeName}
                    required
                    className='city-input'
                    InputProps={{
                        className: 'city-input-inner',
                    }}
                />
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type='submit'
                    className='search-button'
                >
                    Search
                </Button>
            </form>
            {error && <p className='error-message'>Oops! No such place found. Please try again.</p>}
            <p className="additional-info">Enter the name of the city to get its current weather information.</p>
        </div>
    );
}

