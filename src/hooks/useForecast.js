import axios from "axios"
import { useState } from "react"

export const useForecast = () => {
  const [forecastData, setForecastData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchForecast = async (city) => {
    setLoading(true)
    const apiKey = "93b55a8f5451ff836432to73a1c94b02"
    const apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`

    try {
      const response = await axios.get(apiURL)
      setForecastData(response.data)
    } catch (error) {
      throw new Error(`Search error ${error}`)
    } finally {
      setLoading(false)
    }
  }
  return { forecastData, fetchForecast, loading }
}
