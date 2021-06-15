const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c9e96d3d81e462961b72fff443b910ae'

const cityFormEl = document.getElementById('searchCity')
const currentConditionsEl = document.getElementById('current-conditions')
const forecastEl = document.getElementById('forecast')


/*
const formSubmitHandler = function (event) => {

  event.preventDefault();

  const searchCity = document.getElementById('searchCity').trim()

  if (searchCity) {
    getSearchCityWeather(searchCity)


  }
}
*/

//function getSearchCityWeather(city) {

  fetch(BASE_URL)
    .then(function (res) {
      return res.json()
    })
    .then(function (data){
      console.log(data)
    })

//api key c9e96d3d81e462961b72fff443b910ae
