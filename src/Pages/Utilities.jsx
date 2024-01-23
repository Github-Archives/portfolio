import { useState } from 'react'

const Utilities = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <div
        className="App-header rounded-lg bg-white px-6 py-8 text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
        id="Utilities"
      >
        <div className="text-5xl">Utilities</div>
      </div>
      <br />
      <h1>Utilities</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
      <br />
    </div>
  )
}

export default Utilities
