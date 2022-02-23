//First function to perform the search of the city using the Weather API
function searchCityInfo(cityText) {
  let apiKey = "ef67b1869cadffe12a36cdbb72626863";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeatherReport);
}

//Second function to perform the search of the city
function getCurrentCity(event) {
  event.preventDefault();
  let cityText = document.querySelector(".city-entry").value;
  searchCityInfo(cityText);
}

//Third function to get the city location value and pin the position
function displayPosition(position) {
  let apiKey = "ef67b1869cadffe12a36cdbb72626863";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeatherReport);
}

//Fourth function to display the city details when searched
function displayCurrentWeatherReport(response) {
  let currentCityName = document.querySelector(".city");
  currentCityName.innerHTML = response.data.name;
  let currentTemperature = document.querySelector(".temperature");
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  let currentHumdity = document.querySelector("#humidity");
  currentHumdity.innerHTML = Math.round(response.data.main.humidity);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = Math.round(response.data.wind.speed);
  let currentWeatherDescription = document.querySelector(".weather-type");
  currentWeatherDescription.innerHTML = response.data.weather[0].description;
  celsiusTemperature = response.data.main.temp;
  windKilo = response.data.wind.speed;

  //To display the weather icon for each city searched
  let currentWeatherIcon = document.querySelector("#weatherIcon");
  currentWeatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getForecast(response.data.coords);
}

//Fifth function to show the current time by displaying the hour and minutes (Modified)
function showCurrentFormatTime(timestamp) {
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  if (currentHour > 12) {
    currentHour = `${currentHour}`;
  } else {
    currentMinutes = `${currentMinutes}`;
  }

  /*Show the current time and day*/
  let currentDateText = new Date(timestamp * 1000);
  let currentDateElement = document.querySelector(".date");
  currentDateElement.innerHTML = showCurrentFormatTime(currentDateText);

  //Create the array of the days of the week (Modified the days)
  let sevenDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //Create the array of the months (Modified the months by using full name)
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let currDay = date.getDay();
  let currDateNumber = date.getDate();

  return `${sevenDays[currDay]}, ${month} ${currDateNumber} ${currentHour}:${currentMinutes}`;
}

/* Once the name of city has been entered 
and search button has been clicked then city will be searched
change from the current location */
let searchUpForm = document.querySelector(".search-weather");
searchUpForm.addEventListener("submit", getCurrentCity);

/* Use Geolocation API to get the GPS coordinates
Display and the city and current temperature
change back to current location */
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayPosition);
}

/* Change back to current location without refreshing the page */
let currentInfoButtom = document.querySelector("#current-location");
currentInfoButtom.addEventListener("click", getCurrentLocation);
navigator.geolocation.getCurrentPosition(displayPosition);

/* Display the current city without adding the text in HTML file */
searchCityInfo("Laflèche");

/* Sixth function change the conversion to celsius by clicking */
function showConversionCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  let currentWindUnit = document.querySelector("#windUnit");
  let currentWindSpeed = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  currentWindSpeed.innerHTML = Math.round(windKilo);
  currentWindUnit.innerHTML = "km/h";
}

/* Seventh function change the conversion to fahrenheit by clicking */
function showConversionFahrenheit(event) {
  event.preventDefault();
  let fahrenheitConversion = (celsiusTemperature * 9) / 5 + 32;
  let currentWindUnit = document.querySelector("#windUnit");
  let temperatureElement = document.querySelector(".temperature");
  let currentWindSpeed = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(fahrenheitConversion);
  currentWindSpeed.innerHTML = Math.round(windKilo / 1.609344);
  currentWindUnit.innerHTML = "mph";
}
/* Created an variables to set temperature in celsius, wind units to null */
let celsiusTemperature = null;
let windKilo = null;

/* Eighth function to display weather forecast */
function displayWeatherForecast(response) {
  let forecastText = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class ="row">`;
  forecastText.forEach(function (forecastDay, index) {
    if (index < 7) {
      forecastHTML =
        forecastHTML +
        `<div class = "col-2">
        <div class = "weather-forecast-date">
          <small>${formatDate(forecastDay.dt)}</small>
        </div>
          <img src = "http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2px.png" 
            alt = "weather-icons" width = "60" 
          />
          <div class = "weather-forecast-temperatures">
            <span class = "forecast-temperature-max">
            <strong>${Math.round(forecastDay.temp.max)}</strong>
            </span> /
            <span class = "forecast-temperature-min">
            ${Math.round(forecastDay.temp.min)}
            </span>
          </div>
        </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

/* Ninth function to get the forecast of the city searched, 
pin the coordinates and then display the forecast */
function getForecast(coordinates) {
  let apiKey = "ef67b1869cadffe12a36cdbb72626863";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherForecast);
}

/*Tenth function to format the date properly */
function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

/* When fahrenheit (F) is clicked it calls the function */
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", showConversionFahrenheit);

/* When celsius (C) is clicked it calls the function */
let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", showConversionCelsius);
