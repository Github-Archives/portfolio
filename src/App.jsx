import './styles.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import NoPage from './Components/NoPage'
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <>
      <div className="landing-page-header text-red-700">
        Drew&apos;s Porfolio
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<Navigate to="/" />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
