import { Weather } from "./Weather/Weather"
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kamilanitta/weather-project"
            target="_blank"
          >
            Kamila Nitta
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
