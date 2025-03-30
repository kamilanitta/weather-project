import "./CurrentWeather.css"

export const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <div>
        <h1 className="current-city">{data.city}</h1>
        <p className="current-details">
          {data.condition.description} <br />
          Humidity: <strong>{data.temperature.humidity}%</strong>, Wind:{" "}
          <strong>{Math.round(data.wind.speed)}km/h</strong>
        </p>
      </div>
      <div className="current-temperature">
        <img
          className="current-temperature-icon"
          src={data.condition.icon_url}
          alt="weather icon"
        />
        <span className="current-temperature-value">
          {Math.round(data.temperature.current)}
        </span>
        <span className="current-temperature-unit">°C</span>
      </div>
    </div>
  )
}
