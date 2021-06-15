const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c9e96d3d81e462961b72fff443b910ae'

//const apiKey = c9e96d3d81e462961b72fff443b910ae

//const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&id=524901&appid=c9e96d3d81e462961b72fff443b910ae&units=`

const cityFormEl = document.getElementById('searchCity')
const currentConditionsEl = document.getElementById('current-conditions')
const forecastEl = document.getElementById('forecast')
const TusconBtn = document.getElementById('Tuscon').addEventListener('click', Tuscon)

function getCity(){
  fetch(BASE_URL)
  .then((res)=>res.json())
  .then((data)=>{
    let output = '<h2>City</h2>';
      data.forEach(function(city){
        output += `
        <div>
        <h3>${city.name}</h3>
        </div>`
      })
      document.getElementById('currentConditionsEl').innerHTML = output
  })
}

getCity()

cityFormEl.addEventListener('submit', e =>{
  e.preventDefault()
  const inputVal = input.value
})

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

