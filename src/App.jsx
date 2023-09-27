import { useState } from "react"
import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom" // wrap around the elements you want to use routing on
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Utilities from "./Pages/Utilities"
import NoPage from "./Pages/NoPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <div className="card">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route
                className="bg-sky-500 hover:bg-sky-700"
                path="contact"
                element={<Contact />}
              />
              <Route path="utilities" element={<Utilities />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <h1 className="text-2xl font-semibold mb-3">☁ Portfolio ☁</h1>
          <button
            className=" text-white-900 dark:text-white mt-5 text-base font-medium tracking-tight"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is now at {count}
          </button>

          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                ></svg>
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Writes Upside-Down
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
