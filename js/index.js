//Day & Time
function showDayTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];

  let dayTime = document.querySelector("#dayTime");
  dayTime.innerHTML = day + " " + hours + ":" + minutes;
}

window.addEventListener("DOMContentLoaded", showDayTime);


//API Search

function showWeather(response) {
document.querySelector("#city").innerHTML=response.data.name;
document.querySelector("#temp").innerHTML=Math.round(response.data.main.temp
  );

document.querySelector("#humidity").innerHTML= response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed);
}

function cityData(city) {
  let apiKey = "812c2f7ac6ed12862f12ee1cd76e227e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  searchCity(city);
}

//Find Location Button
function findLocation (position) {
let apiKey = "812c2f7ac6ed12862f12ee1cd76e227e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);
}

function currentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findLocation);
}

let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", handleSubmit);

let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", currentLocation);

cityData ("London");