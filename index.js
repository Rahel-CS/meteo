function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time = 1000);
    let iconElement = document.querySelector("#icon-url")



    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML =  Math.round(temperature);   
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML =  `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed} km/hr`;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-app-icon" />`;

    getForecast(response.data.city);
}

function formatDate(date){

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["sunday","monday","tuesday","wednesday","thursday","friday", "saturday"];
    let day = days[date.getDay()];
    if (minutes < 10) {
        minutes =`0${minutes}`;
    }


    return  `${day} ${hours}:${minutes}`;
}
function searchCity(city){
    let apiKey = "200cc43bt60312a3e9528fo8814ed375";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-forms-input");
    
    searchCity(searchInput.value);
    }

function formatDay(timetemp){
    let date = new Date(timetemp * 1000);
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return days[date.getDay()];
}
    function getForecast(city){
        let apiKey ="200cc43bt60312a3e9528fo8814ed375";
        let apiUrl =` https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        axios(apiUrl).then(displayForecast);
    }
function displayForecast(response){
     let forecastHtml = "";

     response.data.daily.forEach(function (day,index) {
        if (index<5){
    forecastHtml = forecastHtml +
    `<div class="weather-forecast-day">
                <div class="weather-forecast-date"> ${formatDay(day.time)} </div>
               <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
               <div class="weather-forecast-degrees"> 
                 <div class="weather-forecast-degree"> 
                  <strong>${Math.round(day.temperature.minimum)}°</strong>
                  </div>
                  <div class="weather-forecast-degree"> ${Math.round(day.temperature.maximum)}°</div>
                </div>
                </div>`;}
});
let forecastElement = document.querySelector("#forecast");     
     forecastElement.innerHTML = forecastHtml
     }   
    
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("paris");

