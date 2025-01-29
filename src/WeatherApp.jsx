import SearchBox from './SearchBox'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react'
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "vikarabad",
            feelsLike: 24.25,
            tempmin: 24.25,
            temp: 24.25,
            tempmax: 24.25,
            humidity: 34,
            windSpeed: 3.98,
            description: "clear sky",

        }
    )
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App by Saimahesh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
