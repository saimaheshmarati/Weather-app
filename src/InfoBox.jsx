import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "./images/init.jpg";
    const HOT_URL="./images/hot.avif"
    const COLD_URL="./images/cold.avif"
    const RAIN_URL="./images/rain.avif"
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
