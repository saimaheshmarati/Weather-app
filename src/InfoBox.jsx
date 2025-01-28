import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css";

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1621124266180-727515a3974a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80 ?RAIN_URL :info.temp>20 ?HOT_URL:COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {info.city} <br/>{
                            info.humidity>80 ?<ThunderstormIcon/> :info.temp>20 ?<WbSunnyIcon/>:<AcUnitIcon/>
                          }
          
                        </Typography>
                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>Temperature: {info.temp}&deg;C</div>
                            <div>Min Temp: {info.tempmin}&deg;C</div>
                            <div>Max Temp: {info.tempmax}&deg;C</div>
                            <div>Humidity: {info.humidity}</div>
                            <div>Wind Speed: {info.windSpeed}</div>
                            <div>
                                The weather is described as <i>{info.description}</i> and Feels like: {info.feelsLike}&deg;C
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
