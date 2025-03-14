import { useState, useEffect } from "react"

import "../App.css"

export const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "93b55a8f5451ff836432to73a1c94b02"
      const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

      try {
        const response = await fetch(apiURL)
        if (!response.ok) throw new Error("Error fetching weather data")

        const data = await response.json()
        console.log(data)
        setWeatherData(data)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchWeather()
  }, [city])

  if (!weatherData) return <p>Loading weather...</p>

  return (
    <div className="Weather">
      <div className="current-weather">
        <div>
          <h1
            className="current-city"
            id="current-city"
          >
            {city}
          </h1>

          <p className="current-details">
            {weatherData.condition.description} <br />
            Humidity:
            <strong>{weatherData.temperature.humidity}%</strong>, Wind:
            <strong> {weatherData.wind.speed} km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <img
            className="current-temperature-icon"
            src={weatherData.condition.icon_url}
          />
          <span
            className="current-temperature-value"
            id="current-temperature"
          >
            {Math.round(weatherData.temperature?.current)}
          </span>
          <span className="current-temperature-unit">°C </span>
        </div>
      </div>
    </div>
  )
}
