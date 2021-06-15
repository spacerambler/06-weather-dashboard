const cityFormEl = document.getElementById('searchCity')
const currentConditionsEl = document.getElementById('current-conditions')
const forecastEl = document.getElementById('forecast')


const formSubmitHandler = function (event) => {
  event.preventDefault();

  const searchCity = document.getElementById('searchCity').trim()

  if (searchCity) {
    getSearchCityWeather(searchCity)


  }
}
*/