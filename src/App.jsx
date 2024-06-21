import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import NoPage from './Components/NoPage'

import Layout from './Components/Layout'

function App() {
  return (
    <>
      <Navbar />
      {/* Wrap EVERYTHING besides the <Navbar/> comonent inside <Layout/> */}
      <Layout>
        {/* "top" = anchor point for scrolling to top of page */}
        <div id="top"></div>
        <div className="card">
          <Routes>
            {/* <About /> is the default home page */}
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Layout>
    </>
  )
}

export default App
