import { getWeather } from './weatherFunction';
import { getGif } from './giphyFunction';

export function domInit(){
    //Add Event Listeners
    const inputField = document.querySelector("#locQuery")
    inputField.addEventListener("blur", (event)=>validateForm(event));
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            validateForm(event);
        }
    });
}

function validateForm(event){
    event.preventDefault();
    const currInput =event.target.value.toLowerCase();
    getToday(currInput,'metric').then((returnVal) => console.log("returns:"+returnVal));
}

function changeWeatherValues(temp, conditions,icon){
    const contentDiv = document.querySelector(".results");
    contentDiv.innerHTML= '';

    const currTemp = document.createElement('div');
    currTemp.textContent = temp;
    contentDiv.appendChild(currTemp);

    const currCond = document.createElement('div');
    currCond.textContent = conditions;
    contentDiv.appendChild(currCond);

    const gifImg = document.querySelector('#weatherGif');
    getGif(icon).then(function(response) {
        gifImg.src = response.data.images.original.url;
      });
    console.log(temp);
    console.log(conditions);
    console.log(icon);
}

async function getToday (location,unitGroup){
    console.log(location);
    try {
        const weatherData = await getWeather(location, unitGroup, 'today'); 
        if (weatherData) {
            changeWeatherValues(weatherData.currentConditions.temp, weatherData.currentConditions.conditions,weatherData.currentConditions.icon,weatherData.days);
            return 1;
        } else {
            alert("Weather data is unavailable!");
            return 2;
        }
    } catch (error) {
        alert("Location not found!");
        console.error("Error fetching weather data:", error);
        return 3;
    }

}