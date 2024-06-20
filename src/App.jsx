import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // wrap around the elements you want to use routing on
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Contact0 from './Pages/Contact0'
import Utilities from './Pages/Utilities'
import NoPage from './Pages/NoPage'

import VerticalSpace from './Components/VerticalSpace'
import SmoothScrollLink from './Utilities/SmoothScrollLink'

import About from './Components/About'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Tools from './Components/Tools'

function App() {
  return (
    <>
      <div id="top"></div>
      <div className="card">
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* Pages/Sections/Smooth Scrolling */}
        {/* <SmoothScrollLink target="about">About</SmoothScrollLink>
        <br />
        <SmoothScrollLink target="projects">Projects</SmoothScrollLink>
        <br />
        <SmoothScrollLink target="blog">Blog</SmoothScrollLink>
        <br />
        <SmoothScrollLink target="contact">Contact</SmoothScrollLink>
        <br />
        <SmoothScrollLink target="tools">Tools</SmoothScrollLink> */}

        {/* <VerticalSpace height="100px" />
        <div id="about">
          {
            <>
              <About />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div> */}
        {/* <br />
        <VerticalSpace height="100px" />
        <div id="projects">
          {
            <>
              <Projects />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div>
        <br />
        <VerticalSpace height="100px" />
        <div id="blog">
          {
            <>
              <Blog />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div>
        <br />
        <VerticalSpace height="100px" />
        <div id="contact">
          {
            <>
              <Contact />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div> */}
        {/* <br />
        <VerticalSpace height="100px" />
        <div id="tools">
          {
            <>
              <Tools />
              <br />
              <SmoothScrollLink target="top">Back to Top</SmoothScrollLink>
            </>
          }
        </div>
        <br /> */}
        {/* Pages/Sections/Smooth Scrolling */}
        {/* <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
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
        </div> */}
      </div>
    </>
  )
}

export default App
