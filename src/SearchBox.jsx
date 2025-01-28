import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "93d0e67c1133dc8f13a02ead3bf0479a"

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            // console.log(jsonResponse)
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                windSpeed: jsonResponse.wind.speed,
                description: jsonResponse.weather[0].description,
    
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err;
        }
        } 
       



    let handleChange =  (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try{
            console.log(city);
        evt.preventDefault();
        setCity("")
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    }catch(error){
        setError(true)
    }
        
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error&&<p style={{color:"red"}}>no such place exist</p>}
            </form>
        </div>

    )
}