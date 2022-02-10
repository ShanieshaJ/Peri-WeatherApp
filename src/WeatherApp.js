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

  //Currently in process of trying to fix the ongoing bug in this section
  let currentWeatherIcon = document.querySelector("#weatherIcon");
  currentWeatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}2x.png`
  );
  currentWeatherIcon.setAttribute("alt", response.data.weather[0].description);
}

//Fifth function to show the current time by displaying the hour and minutes (Modified)
function showCurrentFormatTime(date) {
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  if (currentHour > 12) {
    currentHour = `${currentHour}`;
  } else {
    currentMinutes = `${currentMinutes}`;
  }

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

/*Show the current time and day*/
let currentDateText = new Date();
let currentDateElement = document.querySelector(".date");
currentDateElement.innerHTML = showCurrentFormatTime(currentDateText);

/* Once the name of city has been entered 
And search button has been clicked then city will be searched
change back to current location */
let searchUpForm = document.querySelector(".search-weather");
searchUpForm.addEventListener("submit", getCurrentCity);

/* Bonus #1 - Use Geolocation API to get the GPS coordinates
Display and the city and current temperature
change back to current location */
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayPosition);
}

/* Bonus #2 - Change back to current location without refreshing the page */
let currentInfoButtom = document.querySelector("#current-location");
currentInfoButtom.addEventListener("click", getCurrentLocation);
navigator.geolocation.getCurrentPosition(displayPosition);

/* Display the current city without adding the text in HTML file */
searchCityInfo("Laflèche");

/*
//let celsiusTemp = document.querySelector("#celsius");
//let fahrenheitTemp = document.querySelector("#fahrenheit");
//Bouns - Change the type of temperature to either celsius or fahrenheit
function showConversionFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 51;
}

function showConversionCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 11;
}

fahrenheitTemp.addEventListener("click", showConversionFahrenheit);
celsiusTemp.addEventListener("click", showConversionCelsius);
*/
