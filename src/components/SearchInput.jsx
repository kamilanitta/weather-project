import { useState } from "react"
import "../App.css"

export const SearchInput = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // Evita o recarregamento da página
    if (inputValue.trim() !== "") {
      setCity(inputValue)
      setInputValue("") // Limpa o input após a busca
    }
  }
  return (
    <>
      <form
        id="search-form"
        onClick={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a city.."
          required
          className="search-input"
          id="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="search-button"
        />
      </form>
    </>
  )
}
