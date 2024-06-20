import './styles.css'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import NoPage from './Components/NoPage'

function App() {
  return (
    <>
      <div id="top"></div>
      <div className="card">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
