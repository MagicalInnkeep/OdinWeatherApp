/*
Requesting data from Visual Corssing is done by accessing the API with a link in following way:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]?unitGroup=us&key=YOUR_API_KEY&contentType=json*/
const apiKey        = 'T3MT6UEATLE48LJPNH3YVMJEH'
const baseRequest   = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const keyString     = '&key='+apiKey;
const contentType   = '&contentType=json';

export async function getWeather(location,unitGroup,date){
    console.log("Api query executing:" + location+";"+unitGroup+";"+date);
    const fullRequest = baseRequest + location +"/"+date+"?unitGroup="+unitGroup+keyString+contentType;
    console.log(fullRequest);
    const response= await fetch(fullRequest);
    console.log('response:',response);
    const weatherJson = await response.json();
    console.log(weatherJson);
    return weatherJson;
}

