import { useState } from "react"
import "./SearchInput.css"

export const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      onSearch(inputValue)
      setInputValue("")
    }
  }
  return (
    <>
      <form
        id="search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a city.."
          required
          className="search-input"
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
