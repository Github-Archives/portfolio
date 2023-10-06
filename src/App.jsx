import { useState } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // wrap around the elements you want to use routing on
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Utilities from "./Pages/Utilities";
import NoPage from "./Pages/NoPage";
import VerticalSpace from "./Components/VerticalSpace";
import SmoothScrollLink from "./Utilities/SmoothScrollLink";
import DataOne from "./Components/DataOne";
import DataTwo from "./Components/DataTwo";
import About from "./Components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div id="top"></div>
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
        <h1 className="mb-3 text-2xl font-semibold">☁ Portfolio ☁</h1>
        <button
          className="text-white-900 mt-5 text-base font-medium tracking-tight dark:text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is now at {count}
        </button>

        {/* Smooth Scrolling */}
        <br />
        <SmoothScrollLink target="section1">Section 1</SmoothScrollLink>
        <br />
        <SmoothScrollLink target="section2">Section 2</SmoothScrollLink>
        <VerticalSpace height="300px" />
        <div id="section1">
          {
            <>
              {/* <DataOne /> */}
              <About />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div>
        <br />
        <VerticalSpace height="600px" />
        <div id="section2">
          {
            <>
              <DataTwo />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div>
        <br />
        {/* Smooth Scrolling */}

        <div className="rounded-lg bg-white px-6  py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
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
          <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
            Writes Upside-Down
          </h3>
          <code className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </code>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
