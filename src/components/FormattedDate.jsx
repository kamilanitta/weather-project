export const FormattedDate = (date) => {
  let days = [
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
  let hours = date.getHours()
  let minutes = date.getMinutes()

  if (hours < 10) {
    hours = `0${hours}`
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return (
    <div>
      {formattedWeekDay} {hours}:{minutes}
    </div>
  )
}
