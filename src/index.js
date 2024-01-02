function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#currentTemperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}
function showTemperature(city) {
  let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-Input");
  showTemperature(cityInput.value);
}

let cityElement = document.querySelector("#city-search-form");
cityElement.addEventListener("submit", searchCity);

showTemperature("Asuncion");
