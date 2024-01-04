function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#currentTemperature");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#city");
  let weatherDescriptionElement = document.querySelector("#weatherComment");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#forecast-emoji");
  let today = new Date(response.data.time * 1000);
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
  let hour = today.getHours();
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let timeInfo = document.querySelector("#hour");
  temperatureElement.innerHTML = Math.round(temperature);
  city.innerHTML = response.data.city;
  weatherDescriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="weatherIcon" id="forecast-icon">`;
  currenDateElement.innerHTML = `${day}, ${month} ${date}, ${year}`;

  timeInfo.innerHTML = `${hour}:${minutes}`;
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

showTemperature("Moscow");
