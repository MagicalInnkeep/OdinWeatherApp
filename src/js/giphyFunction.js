const apiKey = 'JF6rTFFgeo3wy0Y7sOBPEh81kwyWVnk8'
const baseRequest = 'https://api.giphy.com/v1/gifs/'
const keyString     = '?api_key='+apiKey;


export async function getGif(weatherType){
    console.log("Api query executing:" + weatherType);
    let gifID
    switch (weatherType){
        case "rain": 
            gifID = 'G0Odfjd78JTpu'; break;
        default:
            gifID = '8qFQA9iD8FS1Txuv9N'; break;
    }
    const fullRequest = baseRequest +gifID + keyString
    const response= await fetch(fullRequest);
    const gif = await response.json();
    return gif;
}
