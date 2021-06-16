const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=c9e96d3d81e462961b72fff443b910ae'

const apiKey = "c9e96d3d81e462961b72fff443b910ae"

const cityFormEl = document.getElementById('searchCity')
const currentConditionsEl = document.getElementById('current-conditions')
const forecastEl = document.getElementById('forecast')
const searchCity = document.getElementById('searchCity')
const TusconBtn = document.getElementById('Tuscon').addEventListener('click', Tuscon)

/*
const formSubmitHandler = (event) => {

  event.preventDefault();

  if (searchCity) {
    getSearchCityWeather(searchCity)


  }
}
*/
//importing city, convert to json

//JSON parse map function to pull in the city object/details

//then pull the keys into the html from there

/*
const getCity = async(city)= {
  const new_url = 'http://api.openweathermap.org/data/2.5/forecast'
  const query = `?apikey=${apiKey}&q=${city}`

  const response = await fetch(url+query)
  const data = await response.json()
  return data[0]
}

console.log(getCity)*/


cityFormEl.addEventListener('submit', e =>{
  e.preventDefault()
  const inputVal = input.value.trim()
  searchCity = inputVal
})
console.log(searchCity)

function getSearchCityWeather(searchCity) {
  fetch(cityURL)
    .then(function (res) {
      return res.json()
    })
    .then(function (data){
    /*  let output = '<h2>City</h2>'
            output += `
            <div>
            <h3>${city.name}</h3>
            </div>`*/
            console.log(data)
          })
          //document.getElementById('currentConditionsEl').innerHTML = output
        }
        getSearchCityWeather()