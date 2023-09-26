import { useState } from "react"

const Utilities = () => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <h1>Utilities</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  )
}

export default Utilities
