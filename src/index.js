function updateDate() {
  let today = new Date();
  let date = today.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[today.getMonth()];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[today.getDay()];
  let year = today.getFullYear();
  let currenDateElement = document.querySelector("#currentdate");
  currenDateElement.innerHTML = `${day}, ${month} ${date}, ${year}`;
}
function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#currentTemperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let weatherDescriptionElement = document.querySelector("#weatherComment");
  weatherDescriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = response.data.wind.speed;
  updateDate();
}
function showTemperature(city) {
  let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
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
updateDate();
