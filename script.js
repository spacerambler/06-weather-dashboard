const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=c9e96d3d81e462961b72fff443b910ae'

const apiKey = "c9e96d3d81e462961b72fff443b910ae"

const main = document.getElementById('main')
const cityFormEl = document.getElementById('searchCity')
const forecastEl = document.getElementById('forecast')
const searchCity = document.getElementById('searchCity')
const TusconBtn = document.getElementById('Tuscon').addEventListener('click', Tuscon)

getWeather(API_URL)

async function getWeather(url) {
  const res = await fetch(url)
  const data = await res.json()
  showCurrentConditions(data.results)
}

function showCurrentConditions(weather) {
  main.innerHTML = ''

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