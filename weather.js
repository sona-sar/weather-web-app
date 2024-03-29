
const apiKey = "4f5038857ed736387f56f8da09997e0a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".input-container input");
const searchButton = document.querySelector(".input-container button");

async function checkWeather(city){
    const response = await fetch(apiURL + `&q=`+city+`&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector(".celcius-info").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".line-1-1").innerHTML = data.main.humidity + `%`;
    document.querySelector(".line-1-2").innerHTML = data.wind.speed + `Km/h`;
    document.querySelector(".additional-info").innerHTML = data.weather[0].main;
    if(data.weather[0].main == "Clear"){
        document.querySelector(".icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".icon").src = "images/snow.png"; //snow
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".icon").src = "images/mist.png"; //mist
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".icon").src = "images/rain.png"; //rain
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".icon").src = "images/cloud.png"; //rain
    }
    else{
        document.querySelector(".icon").src = "images/404.png"; //rain

    }

    

    console.log(data);

}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})