function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time = 1000);

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML =  Math.round(temperature);   
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML =  `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed} km/hr`;
    timeElement.innerHTML = formatDate(date);
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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("paris");