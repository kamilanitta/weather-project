import { useState } from "react"
import { Footer } from "./components/Footer"
import { SearchInput } from "./components/SearchInput"
import { Weather } from "./components/Weather"

import "./App.css"

function App() {
  const [city, setCity] = useState("Berlin")

  return (
    <div className="app-container">
      <SearchInput setCity={setCity} />
      <Weather city={city} />
      <Footer />
    </div>
  )
}

export default App
