import { useWeather } from "./hooks/useWeather"
import { useEffect } from "react"
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather"
import { Footer } from "./components/Footer/Footer"
import { SearchInput } from "./components/SearchInput/SearchInput"
import { ForecastWeather } from "./components/ForecastWeather/ForecastWeather"

import "./App.css"
import { useForecast } from "./hooks/useForecast"

function App() {
  const { weatherData, fetchWeather, loading } = useWeather()
  const { forecastData, fetchForecast } = useForecast()

  useEffect(() => {
    fetchWeather("Paris")
    fetchForecast("Paris")
  }, [])

  if (loading) return <p>Loading weather...</p>

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <SearchInput
        onSearch={(city) => {
          fetchWeather(city)
          fetchForecast(city)
        }}
      />
      <hr />
      {weatherData && <CurrentWeather data={weatherData} />}
      <hr />
      {forecastData && <ForecastWeather data={forecastData} />}
      <Footer />
    </div>
  )
}

export default App
