import { getWeather } from './weatherFunction';
import { getGif } from './giphyFunction';
import partlycloudyday from '../img/partly-cloudy-day.png';
import clearday from '../img/clear-day.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import cloudy from '../img/cloudy.png';
import clearnight from '../img/clear-night.png'
import foggy from '../img/foggy.png';
import windy from '../img/windy.png';
import cloudynight from '../img/cloudy-night.png';

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
    const currInput =event.target.value.toLowerCase().replace(" ","_");
    getToday(currInput,'metric').then((returnVal) => console.log("returns:"+returnVal));
}

function changeWeatherValues(temp, conditions,icon, days){
    const contentDiv = document.querySelector(".results");
    contentDiv.innerHTML= '';

    const currTemp = document.createElement('div');
    currTemp.classList.add("currTemp");
    currTemp.textContent = temp+"°C";
    contentDiv.appendChild(currTemp);

    const currIcon = document.createElement ('img');
    currIcon.src= getImage(icon);
    currIcon.classList.add("currIcon");
    contentDiv.appendChild(currIcon);

    const currCond = document.createElement('div');
    currCond.textContent = conditions;
    contentDiv.appendChild(currCond);

    const gifImg = document.querySelector('#weatherGif');
    gifImg.classList.replace("doorImg","weatherGif");
    getGif(icon).then(function(response) {
        gifImg.src = response.data.images.original.url;
      });

    for(var i=0; i<=5; i++){
        console.log('day '+(i+1)+': '+days[i]);
    }
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

function getImage(icon){
    let imgPath;
    switch (icon){
        case "clear-day": imgPath=clearday; break;
        case "partly-cloudy-day": imgPath=partlycloudyday; break;
        case "snow": imgPath=snow; break;
        case "rain": imgPath=rain; break;
        case "fog": imgPath=foggy; break;
        case "wind": imgPath=windy; break;
        case "cloudy": imgPath=cloudy; break;
        case "partly-cloudy-night":	imgPath=cloudynight; break;
        case "clear-night": imgPath=clearnight; break;
        default: imgPath=clearday; break;
    }
    return imgPath;
}