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
function displayForecast(){
    
     let days =["Tue", "wed", "thur","fri","sat"];
     let forecastHtml = "";
     days.forEach(function (day) {
    forecastHtml = forecastHtml +
    `<div class="weather-forecast-day">
                <div class="weather-forecast-date"> tue </div>
               <div class="weather-forecast-icon">☁</div> 
               <div class="weather-forecast-degrees"> 
                 <div class="weather-forecast-degree"> 
                  <strong>15°</strong>
                  </div>
                  <div class="weather-forecast-degree"> 9°</div>
                </div>
                </div>`;});
     forecastElement.innerHTML = forecastHtml
     }   
     let forecastElement = document.querySelector("#forecast");     
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("paris");
displayForecast();
