import "./ForecastWeather.css"

export const ForecastWeather = ({ data }) => {
  const days = data.daily.slice(1, 6) // pega só os próximos 5 dias (ignora o de hoje)

  const formatDay = (dateString) => {
    const date = new Date(dateString * 1000)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[date.getDay()]
  }

  return (
    <div className="forecast-container">
      {days.map((day, index) => {
        const minTemp = Math.round(day.temperature.minimum)
        const maxTemp = Math.round(day.temperature.maximum)
        const iconTemp = day.condition.icon_url
        const weekDay = formatDay(day.time)

        return (
          <div
            className="single-forecast"
            key={index}
          >
            <span className="weekDay-forecast">{weekDay}</span>
            <img
              className="image-forecast"
              src={iconTemp}
              alt={`Ícone para ${weekDay}`}
            />
            <div>
              <span className="max-forecast">{maxTemp}°C</span>{" "}
              <span className="min-forecast">{minTemp}°C</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
