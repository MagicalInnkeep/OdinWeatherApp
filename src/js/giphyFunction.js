const apiKey = 'JF6rTFFgeo3wy0Y7sOBPEh81kwyWVnk8'
const baseRequest = 'https://api.giphy.com/v1/gifs/'
const keyString     = '?api_key='+apiKey;


export async function getGif(weatherType){
    console.log("Api query executing:" + weatherType);
    let gifID
    switch (weatherType){

        case "cloudy": gifID= 'nsi0IQvbQ9c64'; break;
        case "clear-day": gifID='yALcFbrKshfoY'; break;
        case "partly-cloudy-day": gifID = '8qFQA9iD8FS1Txuv9N'; break;
        case "snow": gifID = 'TgGW6lFmFySYw';break;
        case "rain": gifID = 'G0Odfjd78JTpu'; break;
        case "fog": gifID = 'izxsokj61KP6f84DPQ'; break;
        case "wind": gifID = 'cBKMTJGAE8y2Y'; break;
        case "cloudy": gifID= 'xYMTfc3UFuqKTS0NP0'; break;
        case "partly-cloudy-night":	gifID = 'b29IZK1dP4aWs';break;
        case "clear-night": gifID= 'IxlnMFrOLVNp6';break;        
        default:
            gifID = '8qFQA9iD8FS1Txuv9N'; break;
    }
    const fullRequest = baseRequest +gifID + keyString
    const response= await fetch(fullRequest);
    const gif = await response.json();
    return gif;
}
