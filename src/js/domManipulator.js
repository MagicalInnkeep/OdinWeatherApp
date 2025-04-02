import { getWeather } from './weatherFunction';

export function domInit(){

    //Add Event Listeners
    const inputField = document.querySelector("#locQuery")
    inputField.addEventListener("blur", (event)=>validateForm(event));
}


function validateForm(event){
    const currInput =event.target.value.toLowerCase();
    console.log(currInput);
    getToday(currInput,'metric').then((returnVal) => console.log("returns:"+returnVal));
}

function changeWeatherValues(temp, conditions,icon){
    console.log(temp);
    console.log(conditions);
    console.log(icon);
}

async function getToday (location,unitGroup){
    console.log(location);
    try {
        const weatherData = await getWeather(location, unitGroup, 'today'); 
        console.log("hi?");
        if (weatherData) {
            console.log("hi there!");
            changeWeatherValues(weatherData.currentConditions.temp, weatherData.currentConditions.conditions,weatherData.currentConditions.icon);
            return 1;
        } else {
            alert("Weather data is unavailable!");
            return 2;
        }
    } catch (error) {
        console.log("Catch");
        alert("Location not found!");
        console.error("Error fetching weather data:", error);
        return 3;
    }

}