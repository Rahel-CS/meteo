function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHtml = searchInput.Value;
    }


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);