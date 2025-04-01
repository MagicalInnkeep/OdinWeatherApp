import "./styles.css";
import { getWeather } from './js/weatherFunction';


getToday('Brussel','metric');

function changeWeatherValues(temp, conditions,location, icon){
    console.log(temp);
    console.log(conditions);
    console.log(location);
    console.log(icon);
}

async function getToday (location,unitGroup){
    try {
        const weatherData = await getWeather(location, unitGroup, 'today'); 
        
        if (weatherData && weatherData.days && weatherData.days.length > 0) {
            changeWeatherValues(weatherData.currentConditions.temp, weatherData.currentConditions.conditions, location, weatherData.currentConditions.icon);
        } else {
            alert("Weather data is unavailable!");
        }
    } catch (error) {
        alert("Location not found!");
        console.error("Error fetching weather data:", error);
    }
}