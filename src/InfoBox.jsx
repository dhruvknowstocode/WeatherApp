import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import HumidityAlert from './HumidityAlert';
import { useState, useEffect } from 'react';

export default function InfoBox({ info }) {
    const HOT_URL = "https://media.istockphoto.com/id/1073767838/photo/beautiful-sunset-at-mountain-view-and-long-river.webp?s=170667a&w=0&k=20&c=5JPRQ0beJsOFshii88R5jvGmAb_rSsU_YDsDAvb5mxc=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const [showHumidity, setShowHumidity] = useState(false);

    const getWeatherIcon = () => {
        if (info.humidity > 60) {
            setShowHumidity(true);
            return RAIN_URL;
        } else if (info.temp > 25) {
            return HOT_URL;
        } else {
            return COLD_URL;
        }
    };

    return (
        <div className="info-box">
            <h1 className="main-heading1">Weather Info</h1>
            <div className="card-container">
                <Card className="card">
                    <CardContent className="weather-details">
                        <Typography variant="body2" color="text.secondary" component="div">
                            <Typography variant="h6" gutterBottom component="div">
                                <FavoriteBorderIcon className='yo' /> Highlights
                            </Typography>
                            <p><strong>Min Temp:</strong> {info.tempMin}&deg;C</p>
                            <p><strong>Max Temp:</strong> {info.tempMax}&deg;C</p>
                            <p><strong>Air Quality:</strong> {info.airQuality}</p>
                            <p><strong>Visibility:</strong> {info.visibility} m</p>
                            <p>These are some highlights of today's weather in {info.city}.</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card main-info-card">
                    <CardMedia
                        className="weather-image"
                        component="img"
                        image={getWeatherIcon()}
                        title="Weather Image"
                    />
                    <CardContent className="weather-details">
                        <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
                            {info.city}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" component="div">
                            <Typography variant="h6" gutterBottom component="div">
                                <Brightness5Icon className='yo' /> Today's Weather
                            </Typography>
                            <p><strong>Temperature:</strong> {info.temp}&deg;C</p>
                            <p><strong>Weather Description:</strong> {info.weather}</p>
                            <p><strong>Feels Like:</strong> {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="weather-details">
                        <Typography variant="body2" color="text.secondary" component="div">
                            <Typography variant="h6" gutterBottom component="div">
                                <VisibilityIcon className='yo' /> Additional Info
                            </Typography>
                            <p><strong>Wind Speed:</strong> {info.windSpeed} m/s</p>
                            <p><strong>Humidity:</strong> {info.humidity}%</p>
                            <p><strong>Sunrise:</strong> {info.sunrise}</p>
                            <p><strong>Sunset:</strong> {info.sunset}</p>
                            <p>Here's some additional information about the weather conditions in {info.city}.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            {showHumidity && <HumidityAlert humidity={info.humidity} />}
        </div>
    );
}
