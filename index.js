function searchCity(city){
    
    let apiKey = "200cc43bt60312a3e9528fo8814ed375";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
}
console.log(apiUrl);
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHtml = searchInput.Value;
    searchCity(searchInput.value);
    }


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);