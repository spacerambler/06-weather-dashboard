const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=4887398&appid=c9e96d3d81e462961b72fff443b910ae'

const apiKey = "c9e96d3d81e462961b72fff443b910ae"

const main = document.getElementById('#main')
const forecastEl = document.getElementById('#forecast')
const searchCityInputEl = document.getElementById('#searchCity')

//const TusconBtn = document.getElementById('Tuscon').addEventListener('click', Tuscon)


getWeather(API_URL)

async function getWeather(url) {
  const res = await fetch(url)
  const data = await res.json()
  showCurrentConditions(data.results)
}

function showCurrentConditions(weather) {
  //main.innerHTML = ''

  weather.forEach((conditions) => {
    const {icon, description, temp, wind, humidity} = conditions

    const currentConditionsEl = document.createElement('div')
    currentConditionsEl.classList.add('weather-info')

    currentConditionsEl.innerHTML =
    `
    <span>Temp: ${temp}</span>
    <span>Wind: ${wind}</span>
    <span>Humidity: ${humidity}</span>
    `
    main.appendChild(currentConditionsEl)
  })
}

var formSubmitHandler = function (e) {
  e.preventDefault();

  var searchCity = searchCityInputEl.value.trim();

  if (searchCity) {
    getCity(searchCity);

    main.textContent = '';
    searchCityInputEl.value = '';
  } else {
    alert('Please enter a city name');
  }
};

/*
var getWeatherData = function (searchCity) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + SearchCity + '&appid=c9e96d3d81e462961b72fff443b910ae';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect');
    });
};
*/