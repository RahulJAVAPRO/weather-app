import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  // my api key

    let getWeatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }
    catch(err){
        throw(err);
    }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity(" ");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    }
    let getLocationWeather = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            let res = await fetch(`${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            let data = await res.json();
            let result = {
              city: data.name,
              temp: data.main.temp,
              tempMin: data.main.temp_min,
              tempMax: data.main.temp_max,
              humidity: data.main.humidity,
              feelslike: data.main.feels_like,
              weather: data.weather[0].description,
            };
            updateInfo(result);
          } catch (err) {
            setError(true);
          }
        });
      };
      
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required
            value={city}
            onChange={handleChange}
            />
            <br /><br />
            <Button variant="outlined" 
            type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place in our API</p>}
            </form>
            <Button 
                variant="outlined" 
                onClick={getLocationWeather}
                sx={{ mt: 2 }}
            >               
                Use My Location 📍
            </Button>
        </div>
    )
}