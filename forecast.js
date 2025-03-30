const handleApiData = (resp) => {
  const cityInput = document.querySelector("#city")
  const temperature = document.querySelector("#current-temperature")
  const description = document.querySelector("#description")
  const icon = document.querySelector("#icon")
  const humidity = document.querySelector("#humidity")
  const wind = document.querySelector("#wind")
  const timeElement = document.querySelector("#currentDate")
  const date = new Date(resp.data.time * 1000)

  cityInput.innerHTML = resp.data.city
  temperature.innerHTML = Math.round(resp.data.temperature.current)
  description.innerHTML = resp.data.condition.description
  icon.innerHTML = `<img src=${resp.data.condition.icon_url} class="weatherIcon"/>`
  humidity.innerHTML = `${resp.data.temperature.humidity}%`
  wind.innerHTML = `${resp.data.wind.speed} km/h`
  timeElement.innerHTML = getFormattedDate(date)

  forecastCall(resp.data.city)
  console.log("kamila", resp)
}

const apiCall = (city) => {
  const apiKey = "93b55a8f5451ff836432to73a1c94b02"
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleApiData)
}

//handle Search Input

const handleSearchSubmit = (event) => {
  event.preventDefault()
  const searchInput = document.querySelector("#searchInput")

  apiCall(searchInput.value)
}

const searchInputElement = document.querySelector("#inputContainer")
searchInputElement.addEventListener("submit", handleSearchSubmit)
apiCall("Berlin")

//Forecast

const formatday = (timestamp) => {
  let date = new Date(timestamp * 1000)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return days[date.getDay()]
}

const forecastCall = (city) => {
  const apiKey = "93b55a8f5451ff836432to73a1c94b02"
  const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`

  axios.get(forecastUrl).then(displayForecast)
}

const displayForecast = (resp) => {
  let forecastElement = document.querySelector("#forecast")

  let days = resp.data.daily
  let forecastHtml = ""

  days.forEach((day, index) => {
    const minTemp = Math.round(day.temperature.minimum)
    const maxTemp = Math.round(day.temperature.maximum)
    const iconTemp = day.condition.icon_url

    if (index < 5) {
      forecastHtml += `
      <div class="individualForecastBox">
        <div
          class="weekDayForecast"
          id="weekDayForecas"
        >${formatday(day.time)}</div>
        <img src='${iconTemp}' class="imageForecast"/>
    
        <div class="forecastTemperature">
          <strong>${maxTemp}°C</strong>
          <div class="minForecast">${minTemp}°C</div>
        </div>
      </div>
    `
    }
  })

  forecastElement.innerHTML = forecastHtml
}

//handle time
const currentTime = new Date()

const getFormattedDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const weekDay = date.getDay()
  const formattedWeekDay = days[weekDay]

  const hours = date.getHours()
  const minutes = date.getMinutes()

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  if (hours < 10) {
    hours = `0${hours}`
  }

  const weekDayHours = `${formattedWeekDay} ${hours}:${minutes}`

  return weekDayHours
}

const currentDate = document.querySelector("#currentDate")
currentDate.innerHTML = timeInfo(currentTime)
