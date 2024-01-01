function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  let city = document.querySelector("#city");
  city.innerHTML = cityInput.value;
}

let cityElement = document.querySelector("#city-search-form");
cityElement.addEventListener("submit", searchCity);
