import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom" // wrap around elements you want to use routing on
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import NoPage from "./Pages/NoPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>☁ Portfolio ☁</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is now at {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </BrowserRouter>
  )
}

export default App
