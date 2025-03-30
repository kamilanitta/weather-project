import axios from "axios"
import { useState } from "react"

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchWeather = async (city) => {
    setLoading(true)
    const apiKey = "93b55a8f5451ff836432to73a1c94b02"
    const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

    try {
      const response = await axios.get(apiURL)
      setWeatherData(response.data)
    } catch (error) {
      throw new Error(`Search error ${error}`)
    } finally {
      setLoading(false)
    }
  }
  return { weatherData, fetchWeather, loading }
}
